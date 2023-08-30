import HeaderIconDiv from '@/components/atoms/HeaderIconDiv';
import { headerIconsData } from '@/mock/data';
import { Flex } from '@/styles/customStyle';

const HeaderIcons = () => {
  return (
    <Flex gap='2rem'>
      {headerIconsData.map((data) => (
        <HeaderIconDiv key={data.title} icon={data.icon} title={data.title} />
      ))}
    </Flex>
  );
};

export default HeaderIcons;
