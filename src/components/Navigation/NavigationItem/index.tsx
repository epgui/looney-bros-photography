import React from 'react';
import { Link } from 'gatsby';

interface GetPropsParameters {
  isCurrent: boolean;
  isPartiallyCurrent: boolean;
  href: string;
  location: any;
}

const getLinkProps = ({ selected, unselected }: any) =>
  (params: GetPropsParameters) =>
    params.isPartiallyCurrent ? selected : unselected

interface NavLinkProps {
  name: string;
  link: string;
}

const PartialNavLink: React.FC<NavLinkProps> = ({ name, link }) => {
  const linkProps = getLinkProps({
    selected: { className: 'navlink-active navlink' },
    unselected: { className: 'navlink' }
  });

  return (
    <Link to={link} getProps={linkProps}>
      {name}
    </Link>
  );
};

export default PartialNavLink;
