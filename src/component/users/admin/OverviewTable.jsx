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
  const pageSize = 5;

  // Filter data based on search text
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Joining Date",
      dataIndex: "joiningDate",
      key: "joiningDate",
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
        padding: "20px",

        minHeight: "100vh",
      }}
    >
      <Input
        placeholder="Search here......."
        className="!py-3.5"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 20, width: 300 }}
      />

      <Tabs
        defaultActiveKey="1"
        style={{ marginBottom: 20 }}
        tabBarStyle={{ color: "#fff" }}
      >
        <TabPane
          tab={<span style={{ color: "#fff" }}>Intern</span>}
          key="1"
        ></TabPane>
        <TabPane
          tab={<span style={{ color: "#fff" }}>Temporary</span>}
          key="2"
        ></TabPane>
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

      <div style={{ marginTop: 20, textAlign: "left", color: "#fff" }}>
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
