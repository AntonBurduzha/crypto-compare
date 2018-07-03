import * as React from 'react';
import { Layout } from 'antd';
import type { Element } from 'react';

const Footer = (): Element<any> => {
	return (
		<Layout.Footer style={{ textAlign: 'center' }}>
			Crypto compare ©2018 Created by Anton Burduzha
		</Layout.Footer>
	);
};

export default Footer;
