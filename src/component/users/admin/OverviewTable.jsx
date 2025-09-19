import React, { useState } from "react";
import { Table, Input, Tabs, Pagination } from "antd";

const { TabPane } = Tabs;

const data = Array.from({ length: 20 }, (_, index) => ({
  key: index,
  name: "John b",
  email: "xyzhpc@gmail.com",
  joiningDate: "10/09/25",
}));
const OverviewTable = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Filter data based on search text
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase())
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
  ];

  // Pagination slice
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return (
    <div
      style={{
        padding: "10px",
        paddingTop: "50px",
        minHeight: "100vh",
      }}
    >
      <Input
        placeholder="Search here......."
        className="!py-3.5 "
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 20, width: 300 }}
      />

      <Tabs
        defaultActiveKey="1"
        style={{ marginBottom: 30 }}
        tabBarStyle={{
          color: "#fff",
          fontSize: "28px",
          fontWeight: "600", // টেক্সট একটু মোটা
        }}
      >
        <TabPane
          tab={<span style={{ color: "#fff", fontSize: "28px" }}>Intern</span>}
          key="1"
        />
        <TabPane
          tab={
            <span style={{ color: "#fff", fontSize: "28px" }}>Temporary</span>
          }
          key="2"
        />
      </Tabs>

      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        bordered
        style={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />

      <div style={{ marginTop: 20, textAlign: "right", color: "#fff" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredData.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default OverviewTable;
