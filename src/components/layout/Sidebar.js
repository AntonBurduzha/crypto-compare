import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

class Sidebar extends Component {
	state = { collapsed: false };

	onCollapse = collapsed => this.setState({ collapsed });

	render() {
		return (
			<Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item key="1">
						<Icon type="desktop" />
						<span>Crypto List</span>
					</Menu.Item>
				</Menu>
			</Layout.Sider>
		);
	}
}

export default Sidebar;
