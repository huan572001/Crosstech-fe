import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUserTask, IVerifyTask } from "../../type";
import { HomeAPI } from "../../services/homeService";

export interface SocialState {
  taskUser: IUserTask;
  verify: IVerifyTask;
  loadingTaskUser: boolean;
}

// Define the initial state using that type
const initialState: SocialState = {
  taskUser: {
    discordId: "",
    telegramId: "",
    twitterUsername: "",
    twitterId: "",
  },
  verify: {
    joinChannelTelegram: false,
    joinVibxDiscord: false,
    joinTwitter: false,
  },
  loadingTaskUser: false,
};

export const getTaskUser = createAsyncThunk(
  "getTaskUser",
  async (address: string, thunkAPI) => {
    const { social } = thunkAPI.getState() as RootState;
    try {
      const result = await Promise.all([
        HomeAPI.getUserByAddress(address),
        HomeAPI.getVerifySocial(address),
      ]);
      return {
        taskUser: result[0]?.msg,
        verify: result[1]?.msg,
      };
    } catch (error) {
      return {
        taskUser: social.taskUser,
        verify: social.verify,
      };
    }
  }
);

export const getUserVerifyTask = createAsyncThunk(
  "getUserVerifyTask",
  async (address: string, thunkAPI) => {
    const { social } = thunkAPI.getState() as RootState;
    try {
      const rq = await HomeAPI.getVerifySocial(address);
      return rq?.msg;
    } catch (error) {
      return social.taskUser;
    }
  }
);

export const socialSlice = createSlice({
  name: "Social",
  initialState,
  reducers: {
    setUserTask: (state, action: PayloadAction<IUserTask>) => {
      state.taskUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTaskUser.pending, (state) => {
      state.loadingTaskUser = true;
    });
    builder.addCase(getTaskUser.fulfilled, (state, actions) => {
      state.loadingTaskUser = false;
      state.taskUser = actions.payload.taskUser;
      state.verify = actions.payload.verify;
    });
    builder.addCase(getTaskUser.rejected, (state) => {
      state.loadingTaskUser = false;
    });

    builder.addCase(getUserVerifyTask.pending, (state) => {
      state.loadingTaskUser = true;
    });
    builder.addCase(getUserVerifyTask.fulfilled, (state, actions) => {
      state.loadingTaskUser = false;
      state.verify = actions.payload;
    });
    builder.addCase(getUserVerifyTask.rejected, (state) => {
      state.loadingTaskUser = false;
    });
  },
});

export default socialSlice.reducer;
