import CategoryNode from './components/CategoryNode';
import cancelButton from '../../assets/icons/cancel-button.svg'
import logoIcon from '../../assets/logo/logo.svg';
import useAside from './useAside';
import { Category } from './types/Category';
import {
  Wrapper,
  Overlay,
  Header,
  CloseButton,
  CategoryList,
  LogoWrapper,
} from './Aside.style';

const ALL_POSTS = {
  id: 0,
  name: "Posts",
  children: []
}

function Aside() {
  const {
    category,
    activeCategoryId,
    isAsideOpen,
    handleCategorySelect,
    handleCloseAside
  } = useAside();

  return (
    <>
      <Overlay $isAsideOpen={isAsideOpen} onClick={handleCloseAside} />
      <Wrapper $isAsideOpen={isAsideOpen}>
        <Header>
          <CloseButton
            src={cancelButton}
            alt="close"
            onClick={handleCloseAside}
          />
          <LogoWrapper>
            <img src={logoIcon} alt="DevBadgers Logo" />
            <h2>Starchive</h2>
          </LogoWrapper>
        </Header>
        <CategoryList>
          <CategoryNode
            category={ALL_POSTS}
            onSelect={handleCategorySelect}
            activeCategoryId={activeCategoryId}
          />
          {category.map((topCategory: Category) => (
            <CategoryNode
              key={topCategory.id}
              category={topCategory}
              onSelect={handleCategorySelect}
              activeCategoryId={activeCategoryId}
            />
            ))
          }
        </CategoryList>
      </Wrapper>
    </>
  );
}

export default Aside;