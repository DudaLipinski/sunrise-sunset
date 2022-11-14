import { Layout, Menu } from 'antd'
const { Header } = Layout

const menuItems = ['Home']

const MenuTop = () => (
  <Header>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['0']}
      items={menuItems.map((item, index) => {
        const key = index + 1
        return {
          key,
          label: item,
        }
      })}
    />
  </Header>
)

export default MenuTop
