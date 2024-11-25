import CategoryNode from './components/CategoryNode';
import cancelButton from '../../assets/icons/cancel-button.svg'
import logoIcon from '../../assets/logo/logo.svg';
import useAside from './useAside';
import {
  Wrapper,
  Overlay,
  Header,
  CloseButton,
  CategoryList,
  TopCategoryItem,
  LogoWrapper,
} from './Aside.styles';

const ALL_POSTS = {
  id: 0,
  name: "Posts",
  children: []
}

interface Category {
  id: number;
  name: string;
  children: Category[];
}

function Aside({ isAsideOpen, onClose }: { isAsideOpen: boolean; onClose: () => void}) {
  const { category, activeCategoryId, handleCategorySelect } = useAside();

  return (
    <>
      <Overlay $isAsideOpen={isAsideOpen} onClick={onClose} />
      <Wrapper $isAsideOpen={isAsideOpen}>
        <Header>
          <CloseButton
            src={cancelButton}
            alt="close"
            onClick={onClose}
          />
          <LogoWrapper>
            <img src={logoIcon} alt="DevBadgers Logo" />
            <h2>Starchive</h2>
          </LogoWrapper>
        </Header>
        <CategoryList>
          <TopCategoryItem>
            <CategoryNode
              category={ALL_POSTS}
              onSelect={handleCategorySelect}
              activeCategoryId={activeCategoryId}
              onClose={onClose}
            />
          </TopCategoryItem>
          {category.map((topCategory: Category) => (
            <TopCategoryItem key={topCategory.id}>
              <CategoryNode
                category={topCategory}
                onSelect={handleCategorySelect}
                activeCategoryId={activeCategoryId}
                onClose={onClose}
              />
            </TopCategoryItem>
          ))}
        </CategoryList>
      </Wrapper>
    </>
  );
}

export default Aside;