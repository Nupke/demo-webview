"use client";

import { List, FloatingPanel } from "antd-mobile";
import { useRef, useState } from "react";
import {
  HandPayCircleOutline,
  GiftOutline,
  SoundOutline,
  VideoOutline,
  MailOutline,
  GlobalOutline
} from "antd-mobile-icons";

const anchors = [72, 72 + 119, 200];
const nearbyList = [
  {
    icon: <SoundOutline />,
    name: "#КартаКарта"
  },
  {
    icon: <GlobalOutline />,
    name: "#IronCard"
  }
];
export const FloatingPanelQR = () => {
  const ref = useRef<any>(null);
  return (
    <FloatingPanel anchors={anchors}>
      <List header="Оплатить Картой">
        {nearbyList.map(item => (
          <List.Item prefix={item.icon} key={item.name}>
            {item.name}
          </List.Item>
        ))}
      </List>
    </FloatingPanel>
  );
};
