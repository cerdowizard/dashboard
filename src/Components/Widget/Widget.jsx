import React from "react";
import "./widget.scss";
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import MonetizationOnOutLineIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceOutlined from '@mui/icons-material/AccountBalanceWalletOutlined'
import ShoppingCartOulineIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonIcon from '@mui/icons-material/Person';
const Widget = ({type}) => {
  let data;

  const amount = 100;
  const diff = 10;
  switch (type) {
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        list:"See all users",
        icon:(
          <PersonIcon className="icon"
          style={{
            color:"crimson",
            backgroundColor: "rgba(255,0,0,0.2)",
          }}
          />
        )
      }
      break;
  
      case "order":
        data={
          title:"ORDERS",
          isMoney:false,
          list:"View all orders",
          icon:(
            <ShoppingCartOulineIcon className="icon"
            style={{
              color:"goldenrod",
              backgroundColor: "#d1b51433",
            }}
            />
          )
        }
        break;

        case "earning":
          data={
            title:"ERARNINGS",
            isMoney:false,
            list:"View net eranings",
            icon:(
              <MonetizationOnOutLineIcon className="icon"
              style={{
                color:"green",
                backgroundColor: "#03610986",
              }}
              />
        
            )
          }
          break;

          case "balance":
            data={
              title:"BALANCE",
              isMoney:false,
              list:"See all users",
              icon:(
                <AccountBalanceOutlined className="icon"
                style={{
                  color:"purple",
                  backgroundColor: "#240f9b97",
                }}
                />
              )
            }
            break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="list">{data.list}</span>
        </div>
      <div className="right">
        <div className="per positive">
          <KeyboardArrowUp/>
          {diff}%
          </div>
          {data.icon}
        </div>
    </div>
  );
};

export default Widget;
