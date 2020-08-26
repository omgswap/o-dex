import React from 'react'
import styled from 'styled-components'

// utils, const
import { formatSeconds, dateToBatchId } from 'utils'
import { MEDIA } from 'const'
import Logo  from 'assets/img/odex-logo.svg'

// Components
import UserWallet from 'components/UserWallet'

// Header: Subcomponents
import { NavigationLinks } from 'components/Layout/Header/Navigation'
import { HeaderWrapper } from 'components/Layout/Header/Header.styled'
import useNavigation from 'components/Layout/Header/useNavigation'
import useOpenCloseNav from 'components/Layout/Header/useOpenCloseNav'

// hooks
import { useTimeRemainingInBatch } from 'hooks/useTimeRemainingInBatch'
import { HelpTooltipContainer, HelpTooltip } from 'components/Tooltip'

export interface HeaderProps {
  [key: string]: {
    label: string
    to: string
    order: number
    withPastLocation?: boolean
  }[]
}

const TopWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-pageWrapper);

  @media ${MEDIA.mobile} {
    justify-content: space-between;
  }
`
const TopContent = styled.div`
  margin: 1.25rem;
  display: flex;
  min-width: 0;
  align-items: center;

  @media ${MEDIA.mobile} {
    margin: 0.75rem;
    display: block;
    flex-direction: column;
    align-items: flex-end;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
  }
`

const HeadLink = styled.div`
  align-items: center;
  margin: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-text-primary);

  @media ${MEDIA.mobile} {
    margin: 1rem;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
  }
`

const CountDownStyled = styled.div`
  display: flex;
  flex-flow: column;
  order 2;

 > div {
  display: flex;
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--color-text-primary);
  min-width: 16rem;
  letter-spacing: 0;
  margin: 0.5rem 0;
  align-items: baseline;

  @media ${MEDIA.mobile} {
    flex-flow: row wrap;
    line-height: 1.2;
    width: auto;
  }

  > strong {
    color: var(--color-text-active);
  }
 }
`

const DevdocTooltip = (
  <HelpTooltipContainer>
    <p>
      On Omega Protocol, orders placed on-chain are not immediately executed, but rather collected and aggregated to be
      settled in batches. These batch order settlements occur every 5 minutes consecutively.
    </p>
    <p>
      Learn more{' '}
      <a href="https://github.com/omgswap/o-dex" target="_blank" rel="noopener noreferrer">
        here
      </a>
      .
    </p>
  </HelpTooltipContainer>
)

const BatchCountDown: React.FC = () => {
  const timeRemainingInBatch = useTimeRemainingInBatch()
  return (
    <CountDownStyled>
      <div>
        Next batch in: <strong>{formatSeconds(timeRemainingInBatch)}</strong>
      </div>
      <div>
        Current batch: <strong>{dateToBatchId()}</strong>
        &nbsp;
        <HelpTooltip tooltip={DevdocTooltip} />
      </div>
    </CountDownStyled>
  )
}

const Header: React.FC<HeaderProps> = ({ navigation: initialState }: HeaderProps) => {
  const { isResponsive, openNav, setOpenNav } = useOpenCloseNav()
  const navigationArray = useNavigation(initialState, isResponsive)

  const handleOpenNav = (): void | false => isResponsive && setOpenNav(!openNav)

  return (
    <HeaderWrapper>
      <nav>
        {/* LOGO */}
        {/* <NavLink className="logo" to="/order">
          {CONFIG.name}
        </NavLink> */}
        <TopWrapper>
          <TopContent>
            <img src={Logo} alt="O-DEX" />
            <HeadLink>
              <a href="https://omgswap.com/" target="_blank" rel="noopener noreferrer">
                OMGSwap
              </a>
            </HeadLink>
            <HeadLink>
              <a href="https://omgswap.link/" target="_blank" rel="noopener noreferrer">
                OMGSwap Info
              </a>
            </HeadLink>
          </TopContent>
            {/* USER WALLET */}
          <TopContent>
            <UserWallet />
            {/* Global Batch Countdown */}
            <BatchCountDown />
          </TopContent>
        </TopWrapper>
        {/* HEADER LINKS */}
        <NavigationLinks
          navigation={navigationArray}
          responsive={isResponsive}
          handleOpenNav={handleOpenNav}
          showNav={openNav}
        />
      </nav>
    </HeaderWrapper>
  )
}

export default Header
