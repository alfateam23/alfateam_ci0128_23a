import { Space, Menu } from "antd";
import { ButtonDropDown, DropDown } from "./Elements/FormElements";
import { DownOutlined } from "@ant-design/icons";
// componente para desplegar los roles de usuario
const ComponentDropDown = ({
  label,
  name,
  items,
  leyenda,
  selectedItem,
  setSelectedItem,
  SetItem
}) => {
  const handleMenuClick = (e) => {
    const selected = items.find((item) => item.Nombre === e.key);
    setSelectedItem(selected);
    setValueSelected(selected);
  };

  const setValueSelected = (selected) => {
    const { Nombre } = selected || {};
    SetItem(Nombre);
  };

  const handleDropDownOpenChange = (open) => {
    if (open && selectedItem) {
      const selectedItemName = selectedItem.Nombre;
      const currentSelectedItemName = items.find(
        (item) => item.Nombre === selectedItemName
      )?.Nombre;
      if (selectedItemName !== currentSelectedItemName) {
        setSelectedItem(null);
      }
    }
  };

  const shouldDisplayLeyenda =
    !selectedItem || !items.some((item) => item.Nombre === selectedItem.Nombre);

  const menu = (
    <Menu onClick={handleMenuClick} className="h-25 overflow-y-scroll">
      {items.map((items) => (
        <Menu.Item key={items.Nombre}>{items.Nombre}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div style={{ maxHeight: "70px" }}>
      <label htmlFor={name}>{label}</label>
      <div>
        <DropDown
          overlay={menu}
          trigger={["click"]}
          onOpenChange={handleDropDownOpenChange}
        >
          <ButtonDropDown>
            <Space>
              {shouldDisplayLeyenda ? leyenda : selectedItem.Nombre}
              <DownOutlined />
            </Space>
          </ButtonDropDown>
        </DropDown>
      </div>
    </div>
  );
};

export { ComponentDropDown };
