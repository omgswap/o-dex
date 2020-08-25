import React from 'react'
import styled from 'styled-components'
import { ContentPage } from 'components/Layout/PageWrapper'
import addressesByNetwork from 'api/deposit/batchExchangeAddresses'
import { getNetworkFromId } from '@gnosis.pm/dex-js'
import { EtherscanLink } from 'components/EtherscanLink'

export const AboutWrapper = styled(ContentPage)`
  line-height: 2.2rem;

  a {
    display: inline-block;
    margin-left: 0.3rem;
  }

  div#code-link {
    color: gray;
    margin-left: 2rem;
    font-size: 1.2rem;
  }

  .contract-addresses {
    font-size: 0.85em;
    a {
      margin-left: 0;
    }
  }
`

const About: React.FC = () => {
  const ContractAddresses = Object.entries(addressesByNetwork).map(([networkIdString, address], index) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const networkId = +networkIdString!
    return (
      <React.Fragment key={address}>
        {index > 0 && <span>, </span>}
        <EtherscanLink type="contract" identifier={address} networkId={networkId} label={getNetworkFromId(networkId)} />
      </React.Fragment>
    )
  })
  return (
    <AboutWrapper>
      <h1>About {CONFIG.name}</h1>
      <p>
        <strong>{CONFIG.name}</strong> is an Open Source interface for{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/omgswap/o-dex">
          Omega Protocol
        </a>
        .<br />
        <div id="code-link">
          Check out the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/omgswap/o-dex">
            Source Code
          </a>{' '}
          and{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/omgswap/o-dex/releases">
            Releases
          </a>
          .
        </div>
      </p>
      <p>
        <strong>Omega Protocol</strong> is a fully permissionless DEX that enables ring trades to maximize liquidity.
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/omgswap/o-dex">
          Read more here
        </a>
      </p>

      <h2>Versions:</h2>
      <ul>
        <li>
          {CONFIG.name}:&nbsp;
            v{VERSION}
          {' '}
        </li>
        <li>
          Smart Contract:&nbsp;
            v{CONTRACT_VERSION}{' '}
          <span className="contract-addresses">({ContractAddresses})</span>
        </li>
        <li>
          dex-js library:&nbsp;
            v{DEX_JS_VERSION}
        </li>
      </ul>

      <h2>Learn more about Omega Protocol</h2>
      <ul>
        <li>
          Developer portal:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/omgswap/o-dex">
            https://github.com/omgswap/o-dex
          </a>
        </li>
        <li>
          Smart Contracts:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/omgswap/o-dex">
            dex-contracts
          </a>
        </li>
      </ul>

      <h2>Useful Links</h2>
      <ul>
        <li>
          Website <small>(Main Site)</small>:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://omgswap.in">
            Omega Protocol
          </a>
        </li>
        <li>
          DEX:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://odex.link">
            ODEX
          </a>
        </li>
        <li>
          Swap:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://omgswap.com">
            OMGSwap
          </a>
        </li>

        <li>
            Info:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://omgswap.link">
            OMGSwap.Link
          </a>
        </li>

        <li>
          Twitter:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/omegadefi">
            @omegadefi
          </a>
        </li>

        <li>
          Telegram:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/omegadefi">
            @omegadefi
          </a>
        </li>

        <li>
          News:{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://news.omgswap.in">
            News
          </a>
        </li>
      </ul>
    </AboutWrapper>
  )
}

export default About
