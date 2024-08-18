import { Card } from "antd";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { HomeAPI } from "../../../services/homeService";
import { getUserVerifyTask } from "../../../redux/slice/connectSocial";
import { SocialEnum, STATUS_CARD } from "../../../type";
import { AppButton } from "../../../component/button";
import { useState } from "react";
interface PropsCard {
  status: string;
  onClickButton?: () => void;
  loading: boolean;
}
export const Slider = () => {
  const { loadingTaskUser, taskUser, verify } = useAppSelector(
    (state) => state.social
  );
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const loginSocial = async (address: string, typeSocial: string) => {
    setLoading(true);
    try {
      const rq = await HomeAPI.loginSocial({ address, typeSocial });
      if (rq.success) {
        verifySocial(address, typeSocial);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const verifySocial = async (address: string, typeSocial: string) => {
    try {
      const rq = await HomeAPI.verifySocial({ address, typeSocial });
      if (rq.success) {
        dispatch(getUserVerifyTask("huan15"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex max-w-[1008px] mx-auto my-20">
      {/* {data?.map((e, index) => { */}
      {/* return ( */}
      <CardSlider
        // key={index}
        status={
          taskUser?.twitterId?.length > 0
            ? verify.joinTwitter
              ? STATUS_CARD.VERIFY
              : STATUS_CARD.FOLLOW
            : STATUS_CARD.DISABLE
        }
        loading={loadingTaskUser || loading}
        onClickButton={() => {
          verifySocial("huan15", SocialEnum.TWITTER);
        }}
      />
      <CardSlider
        // key={index}
        status={
          taskUser?.twitterId?.length > 0
            ? verify.joinChannelTelegram
              ? STATUS_CARD.VERIFY
              : STATUS_CARD.FOLLOW
            : STATUS_CARD.DISABLE
        }
        loading={loadingTaskUser || loading}
        onClickButton={() => {
          loginSocial("huan15", SocialEnum.TELE);
        }}
      />
      <CardSlider
        // key={index}
        status={
          taskUser?.twitterId?.length > 0
            ? verify.joinVibxDiscord
              ? STATUS_CARD.VERIFY
              : STATUS_CARD.FOLLOW
            : STATUS_CARD.DISABLE
        }
        loading={loadingTaskUser || loading}
        onClickButton={() => {
          loginSocial("huan15", SocialEnum.DISCORD);
        }}
      />
      {/* ); */}
      {/* })} */}
    </div>
  );
};

const CardSlider = ({ status, loading, onClickButton }: PropsCard) => {
  return (
    <Card
      className={clsx(
        status === STATUS_CARD.VERIFY ? "!bg-customColor" : "",
        "w-full"
      )}
    >
      {status === STATUS_CARD.VERIFY ? (
        <div>V</div>
      ) : (
        <AppButton
          disabled={status === STATUS_CARD.DISABLE}
          onClick={onClickButton}
          loading={loading}
          className={clsx(
            status === STATUS_CARD.DISABLE
              ? " bg-slate-600 cursor-not-allowed"
              : "bg-pink-800"
          )}
        >
          Flower
        </AppButton>
      )}
    </Card>
  );
};
