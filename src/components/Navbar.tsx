import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Avatar, Box, Flex, Heading, HStack, Image } from '@chakra-ui/react';
import logo from 'assets/logo.svg';
import { LogoutButton } from 'features/auth/components/LogoutButton';
import { useCurrentUser, useIsPrivateUser } from 'services/auth/hooks/useCurrentUser';
import { Paths } from 'services/routes/Paths';

const NavLink = ({ name, path }: { name: string; path: Paths }) => {
  const resolved = useResolvedPath(path);
  const navigate = useNavigate();
  const match = useMatch({ path: resolved.pathname, end: true });
  const isMatch = Boolean(match);

  return (
    <Box
      display="flex"
      alignItems="center"
      fontWeight={isMatch ? 'bold' : ''}
      color={isMatch ? 'black.400' : 'grey.400'}
      height="100%"
      cursor="pointer"
      borderBottom={isMatch ? 'solid blue' : ''}
      onClick={() => {
        navigate(path);
      }}
    >
      {name}
    </Box>
  );
};

const userNav = [
  { name: 'Wyszukaj schroniska', path: Paths.FindNeeds },
  { name: 'Moje transakcje', path: Paths.Transactions },
  { name: 'Mój inwentarz', path: Paths.Inventory },
];

const shelterNav = [
  { name: 'Wyszukaj przedmioty', path: Paths.FindInventory },
  { name: 'Moje transakcje', path: Paths.Transactions },
  { name: 'Moje potrzeby', path: Paths.Needs },
];

export const Navbar = () => {
  const isPrivate = useIsPrivateUser();
  const { profile } = useCurrentUser();
  const items = isPrivate ? userNav : shelterNav;

  return (
    <Box boxShadow="xl" width="100%" marginBottom="2rem" display="flex" justifyContent="space-between">
      <HStack gap="0.5rem">
        <Image src={logo} alt="" marginLeft="1rem" />
        <Heading margin="1rem">Pet Share</Heading>
        {items.map((item) => (
          <NavLink {...item} />
        ))}
      </HStack>
      <Flex alignItems="center" mr="1rem">
        <Avatar margin="1rem" src={profile.avatar} />
        <LogoutButton />
      </Flex>
    </Box>
  );
};
