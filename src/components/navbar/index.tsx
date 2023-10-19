import { TabBar } from "antd-mobile";
import { AppOutline, MessageOutline, UserOutline } from "antd-mobile-icons";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const location = useRouter();
  const tabs = [
    {
      key: "/home",
      title: "Дом",
      icon: <AppOutline />
    },
    {
      key: "/message",
      title: "Сообщение",
      icon: <MessageOutline />
    },
    {
      key: "/me",
      title: "Пользователи",
      icon: <UserOutline />
    }
  ];

  const setRouteActive = (value: string) => {
    location.push(value);
  };

  return (
    <>
      <TabBar safeArea activeKey={"home"} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
};
