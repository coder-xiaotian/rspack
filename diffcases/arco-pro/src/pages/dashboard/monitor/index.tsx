import { Space } from "@arco-design/web-react";
import React from "react";
import { useSelector } from "react-redux";
import ChatPanel from "./chat-panel";
import DataStatistic from "./data-statistic";
import "./mock";
import QuickOperation from "./quick-operation";
import Studio from "./studio";
import StudioInformation from "./studio-information";
import StudioStatus from "./studio-status";
import styles from "./style/index.module.less";

export default function Monitor() {
	const userInfo = useSelector((state: any) => state.userInfo);
	return (
		<div>
			<div className={styles.layout}>
				<div className={styles["layout-left-side"]}>
					<ChatPanel />
				</div>
				<div className={styles["layout-content"]}>
					<Space size={16} direction="vertical" style={{ width: "100%" }}>
						<Studio userInfo={userInfo} />
						<DataStatistic />
					</Space>
				</div>
				<div className={styles["layout-right-side"]}>
					<Space size={16} direction="vertical" style={{ width: "100%" }}>
						<StudioStatus />
						<QuickOperation />
						<StudioInformation />
					</Space>
				</div>
			</div>
		</div>
	);
}
