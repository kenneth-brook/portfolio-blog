import React, { useState } from 'react';
import Link from 'next/link';
import { APP_NAME } from '../config';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color='light' light expand='md'>
				<Link href='/'>
					<NavLink className='font-weight-bold'>{APP_NAME}</NavLink>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<NavItem>
							<Link href='/signin'>
								<NavLink>Signin</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href='/signup'>
								<NavLink>Signup</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<NavLink href='https://github.com/reactstrap/reactstrap'>
								GitHub
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
