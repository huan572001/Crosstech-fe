import { Button, Card, Popover, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { HomeAPI } from "../../../services/homeService";
import { SocialEnum } from "../../../type";
import { getTaskUser } from "../../../redux/slice/connectSocial";
export const Connect = () => {
  const { taskUser, loadingTaskUser } = useAppSelector((state) => state.social);
  const dispatch = useAppDispatch();
  const loginSocial = async () => {
    try {
      const rq = await HomeAPI.loginSocial({
        address: "huan15",
        typeSocial: SocialEnum.TWITTER,
      });
      if (rq?.success) {
        dispatch(getTaskUser("huan15"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      className={
        "border-[2px] border-[#EEC5C7] rounded-[30px] relative max-w-[1008px] mx-auto"
      }
    >
      <div className="flex flex-col gap-6">
        <Typography className={"text-xl font-medium"}>
          Connect Your X account
        </Typography>
        <div className="flex flex-col gap-4">
          <div>
            <div className=" text-zinc-600 text-sm font-medium  leading-tight">
              You need to connect your X account to join Social Task
            </div>
            <Popover
              overlayClassName={"tooltip-popover"}
              placement={"right"}
              trigger={"click"}
              content={
                <div className={"max-w-[250px] text-[#667085] pt-2 relative"}>
                  Complete each task during the event and claim your HEART token
                  bonus after it concludes
                </div>
              }
            >
              <Button
                className={
                  "flex text-sky-600 border-0 shadow-none p-0 leading-normal cursor-pointer items-center"
                }
              >
                Learn more{" "}
                {/* <RightIcon className={"text-xs  w-4 h-4"} fill={"#0D88D8"} /> */}
              </Button>
            </Popover>
          </div>

          <Button
            className="w-fit px-8 bg-red-500 rounded-[25px] h-10 text-white text-base font-medium"
            disabled={taskUser.twitterId?.length > 0}
            loading={loadingTaskUser}
            onClick={() => {
              loginSocial();
            }}
          >
            {taskUser.twitterId?.length > 0
              ? taskUser.twitterUsername
              : "Connect your X account"}
          </Button>
        </div>
      </div>
    </Card>
  );
};
