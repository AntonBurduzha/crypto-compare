import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, Icon } from 'antd';
import * as navActions from '../../actions';

class Sidebar extends Component {
	navList = [
		{ key: 'list', icon: 'desktop', text: 'Crypto List' },
		{ key: 'marketBTC', icon: 'area-chart', text: 'BTC Market' },
		{ key: 'marketETH', icon: 'area-chart', text: 'ETH Market' }
	];
	state = { collapsed: false };

	onCollapse = collapsed => this.setState({ collapsed });

	onChangeTab = type => () => this.props.getNextTab(type);

	render() {
		return (
			<Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
				<Menu theme="dark" defaultSelectedKeys={[this.props.tab]} mode="inline">
					{ this.navList.map(nav => {
						return (
							<Menu.Item key={nav.key} onClick={this.onChangeTab(nav.key)}>
								<Icon type={nav.icon}/><span>{nav.text}</span>
							</Menu.Item>
						);
					})
				}
				</Menu>
			</Layout.Sider>
		);
	}
}

function mapStateToProps(state) {
	return { tab: state.app.navigation.get('tab') }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ ...navActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
