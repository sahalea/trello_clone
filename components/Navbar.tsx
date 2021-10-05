import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';

const Nav = styled.div`
  background-color: #0067a3;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  img {
    width: 80px !important;
    object-fit: contain !important;
  }
`;

const Navbar = () => {
  const router = useRouter();
  return (
    <Nav onClick={() => router.push('/list')}>
      <Image src="/logo.gif" alt="Vercel Logo" width={72} height={16} />
    </Nav>
  );
};

export default Navbar;
