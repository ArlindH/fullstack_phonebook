import React from "react";
import { Table } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  }
];

class PeopleTable extends React.Component {
    render() {
        const { data } = this.props;
        const { pagination } = this.props;
        const { handleTableChange } = this.props;
        return (
            <Table
              columns={columns}
              dataSource={data.people.list}
              rowKey={person => person._id}
              loading={data.get.loading}
              pagination={pagination}
              onChange={handleTableChange}
            />
        );
    }
}


export default PeopleTable;
