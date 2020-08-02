import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex } from '../../elements';
import Logo from '../Logo';
import * as Styled from './style';

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

type NavigationItem = {
  name: string;
  link: string;
}

interface Props {
  dark: boolean;
  navigation: {
    nodes: Array<NavigationItem>;
  }
}

const Sidebar: React.FC<Props> = ({ dark, navigation }) => {
  return (
    <Styled.SideBarInner bg={dark ? "#000" : "#FFF"} as="aside" p={[6, 6, 8]}>
      <Flex
        flexWrap="nowrap"
        flexDirection={['row', 'row', 'row', 'column']}
        alignItems={['center', 'center', 'center', 'flex-start']}
        justifyContent="space-between"
      >
        <Box width={['3rem', '4rem', '5rem', '6rem']}>
          <Link to="/" aria-label="Looney Bros. Photography, Back to Home">
            <Logo color={dark ? "#FFF" : "#000"} />
          </Link>
        </Box>
        
        <Styled.Nav
          color={dark ? "#000" : "#FFF"}
          mt={[0, 0, 0, 10]}
          as="nav"
          flexWrap="nowrap"
          flexDirection={['row', 'row', 'row', 'column']}
          alignItems="flex-start"
        >
          {navigation.nodes.map((item) => (
            <PartialNavLink to={item.link} key={item.name}>
              {item.name}
            </PartialNavLink>
          ))}
        </Styled.Nav>
      </Flex>
    </Styled.SideBarInner>
  );
};

export default Sidebar;
