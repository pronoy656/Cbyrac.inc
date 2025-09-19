import React, { useState } from "react";
import {
  Table,
  Input,
  Tabs,
  Dropdown,
  Menu,
  Button,
  Tag,
  Pagination,
} from "antd";
import {
  MoreOutlined,
  SearchOutlined,
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const data = Array.from({ length: 20 }, (_, index) => ({
  key: index,
  name: "John b",
  email: "xyzhpc@gmail.com",
  joiningDate: "10/09/25",
  status: ["Approved", "Reject", "Pending"][index % 3],
}));

// Use light background colors for status tags with dark text
const statusColors = {
  Approved: "#d8f5e0", // light green
  Reject: "#ffd6d6", // light red
  Pending: "#e6e6e6", // light gray
};

const actionMenu = (
  <Menu>
    <Menu.Item key="view" icon={<EyeOutlined />}>
      View
    </Menu.Item>
    <Menu.Item
      key="approve"
      icon={<CheckOutlined />}
      style={{ color: "green" }}
    >
      Approve
    </Menu.Item>
    <Menu.Item key="reject" icon={<CloseOutlined />} style={{ color: "red" }}>
      Reject
    </Menu.Item>
    <Menu.Item key="download" icon={<DownloadOutlined />}>
      Download PDF
    </Menu.Item>
  </Menu>
);

const RequestList = () => {
  const [search, setSearch] = useState("");
  const [currentTab, setCurrentTab] = useState("intern");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>User Name</span>
      ),
      dataIndex: "name",
      key: "name",
      render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
    },
    {
      title: <span style={{ fontWeight: "bold" }}>Email</span>,
      dataIndex: "email",
      key: "email",
      render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
    },
    {
      title: <span style={{ fontWeight: "bold" }}>Joining Date</span>,
      dataIndex: "joiningDate",
      key: "joiningDate",
      render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
    },
    {
      title: <span style={{ fontWeight: "bold" }}>Status</span>,
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = statusColors[status] || "#444";
        return (
          <Tag
            style={{
              background: color,
              color: "#111",
              fontWeight: 700,
              borderRadius: 8,
              padding: "4px 10px",
              fontSize: 16, // data text বড়
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: <span style={{ fontWeight: "bold" }}>Action</span>,
      key: "action",
      render: () => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <Button icon={<MoreOutlined />} style={{ fontSize: 16 }} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px", background: "#0c0c1a", minHeight: "100vh" }}>
      <Input
        className="!py-3"
        placeholder="Search here......"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        prefix={<SearchOutlined style={{ color: "#888" }} />}
        style={{
          marginBottom: 16,
          width: 400,
          borderRadius: 8,
          background: "#fff",
          color: "#fff",
        }}
      />

      <Tabs
        activeKey={currentTab}
        onChange={(key) => setCurrentTab(key)}
        style={{ marginBottom: 16 }}
        tabBarStyle={{
          backgroundColor: "#0c0c1a", // dark background
          borderRadius: 8,
          color: "white", // default text color
        }}
        tabBarGutter={16} // space between tabs
        type="line" // you can also try "card" for card-like tabs
      >
        <TabPane
          tab={
            <span
              style={{
                color: currentTab === "intern" ? "blue" : "#fff",
                fontSize: "28px",
              }}
            >
              Intern
            </span>
          }
          key="intern"
        />
        <TabPane
          tab={
            <span
              style={{
                color: currentTab === "temporary" ? "#946344" : "#fff",
                fontSize: "28px",
              }}
            >
              Temporary
            </span>
          }
          key="temporary"
        />
      </Tabs>

      <Table
        columns={columns}
        dataSource={filteredData.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )}
        pagination={false}
        rowClassName={() => "custom-row"}
        style={{ background: "#0c0c1a", borderRadius: 10, overflow: "hidden" }}
      />

      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredData.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default RequestList;
