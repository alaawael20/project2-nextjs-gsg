import { styled } from 'styled-components';

export const FooterSection = styled.footer`
  max-width: 100%;
  background-color: ${({ theme }) => theme.pallet.base_white};
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2.5rem 0;

  .info {
    h6 {
      letter-spacing: -0.2px;
      padding: 1rem 0;
      color: ${({ theme }) => theme.pallet.gray_6};
      max-width: 250px;
    }

    .social_media {
      display: flex;
      gap: 12px;
    }
  }
`;
export const SocialMediaICon = styled.img`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

export const FooterContentDetails = styled.div``;

export const ContentDetailItem = styled.div`
  h6 {
    color: ${({ theme }) => theme.pallet.base_dark};
  }
`;

export const ContentDetailItemContent = styled.div`
  margin-top: 10px;

  a {
    text-decoration: none;
  }
  h6 {
    letter-spacing: -0.2px;
    color: ${({ theme }) => theme.pallet.gray_6};
  }
`;

export const ContentDetailImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 123px;
  height: 42px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.pallet.base_dark};
  margin-bottom: 8px;
`;

export const ContentDetailSingleImage = styled.img``;

export const FooterCopyRights = styled.div`
  max-width: 100%;
  background-color: ${({ theme }) => theme.pallet.gray_2};
`;

export const FooterCopyRightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  h6 {
    letter-spacing: -0.2px;

    color: ${({ theme }) => theme.pallet.gray_8};
  }
`;

export const CopyRightsLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
export const CopyRightsLanguageIcon = styled.img`
  height: ${({ height }) => height};
`;