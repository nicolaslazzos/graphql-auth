import React from "react";
import { PageHeader, Button } from "antd";

export default ({ children, title, subtitle, actions, onTitlePress, onBackPress }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: 20 }}>
      <PageHeader
        className="site-page-header"
        title={
          <a style={{ color: "black" }} onClick={onTitlePress}>
            {title}
          </a>
        }
        subTitle={subtitle}
        onBack={onBackPress}
        extra={actions?.map((item, i) => (
          <Button key={`${i}`} {...item}>
            {item.text}
          </Button>
        ))}
      />
      {children}
    </div>
  );
};
