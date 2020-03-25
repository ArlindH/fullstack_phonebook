import React from "react";
import { connect } from "react-redux";
import peopleActions from "../../business/people/actions";

import { Layout, Menu } from 'antd';
import PeopleTable from '../../components/peopleTable';
import NewPersonForm from '../../components/newPersonForm';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {
    state = {
        pagination: {
            current: 1,
            pageSize: 10,
            total: 0
        },
      };

    
    componentDidMount() {
        this.getPeople({});
    }

    static getDerivedStateFromProps(props, state) {
        if(props.data && props.data.people && props.data.people.total !== state.pagination.total) {
            return { pagination: { ...state.pagination, total: props.data.people.total } };
        }

        return state;
    }

    async getPeople(parameters) {
        const { getPeople } = this.props;
        const { pagination } = this.state;
        getPeople({page: pagination.current, pageSize: pagination.pageSize, ...parameters});
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.setState({ pagination }, this.getPeople);
    }

    render() {
        const { data, addPerson } = this.props;

        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: '20px' }}>
                    <div className="site-layout-content">
                        <NewPersonForm 
                            submitNewPerson={addPerson}
                            loading={data.post.loading}
                       />
                        <br />
                        <PeopleTable
                            data={data}
                            pagination={this.state.pagination}
                            handleTableChange={this.handleTableChange}
                        />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Best Phonebook App Ever!</Footer>
            </Layout>
        );
    }
}


function mapStateToProps(state) {
    return {
      data: state.People
    };
  }
  export default connect(
    mapStateToProps,
    peopleActions
  )(Home);
  