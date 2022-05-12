interface User {
  firstName: string;
  lastName: string;
}

const fernando: User = {
  firstName: 'Fernando',
  lastName: 'Andrade',
};

const getFirstName = (user: User) => user.firstName;

const reverseName = (name: string) => name.split('').reverse().join('');

const capitalizeName = (name: string) => name.toUpperCase();

const transformName = (user: User) => {
  const userName = getFirstName(user);
  const upperName = capitalizeName(userName);
  return reverseName(upperName);
};

console.log(transformName(fernando));
