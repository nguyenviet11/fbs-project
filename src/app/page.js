import style from './page.module.css'
import Image from 'next/image'
import logo from '../../public/fbs.jpg'

import fbs_giayphep from "../../public/fbs/1.png";
import fbs_sanpham_giaodich from "../../public/fbs/2.png";
import fbs_trader from "../../public/fbs/5.png";
import fbs_account_giaodich from "../../public/fbs/6.png";
import fbs_donbay from "../../public/fbs/7.png";
import fbs_nap_rut_tien from "../../public/fbs/8.png";
import fbs_chuong_trinh from "../../public/fbs/9.png";
import fbs_mt4 from "../../public/fbs/fbs_mt4.webp";
import fbs_mt5 from "../../public/fbs/fbs_mt5.webp";

export default function Home() {
 const URL_FBS = "https://fbs.partners/?ibl=752067&ibp=31077087"

  return (
    <div>
      <header className={style.header}>
        <nav className={style.navbar}>
        </nav>
        <div className={style.container}>
          <ul style={{ textAlign: 'center', margin: 'auto' }} className={style.list}>
            <a href={URL_FBS}>
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={120}
                priority
                className={style.image}
              /></a>
            <li><a>Home</a></li>
            <li><a>Why Trust Us</a></li>
            <li><a>How We Test</a></li>
            <li><a>Trust Score</a></li>
            <li><a>Contacts</a></li>
          </ul>
        </div>
        <div className={style.containerLogo}>
          <h3 className={style.fontText}>We evaluate the brokers based on the experience, experience and expertise of traders who have many years of experience in the market, we provide an in-depth assessment and filter out the Forex Brokers that are most trusted and used by customers in Vietnam and in the world</h3>
          <div style={{ display: 'flex', marginTop: 40 }}>
            <div style={{ width: '50%' }} className={style.none}>
              <Image src={logo} alt="Logo fbs"
              className={style.imagLogo}
              /></div>
            <div className={style.margin}>
              <h4 style={{ fontSize: 60, fontWeight: 400 }}>FBS.COM</h4>
              <p className={style.text3}>FBS, or FBS Market Inc, is a brokerage company founded in 2009, headquartered in Russia. With the goal of expanding and investing heavily in marketing, FBS has become an official partner of FC Barcelona since January 1, 2020. With more than 10 years of operation, FBS has made a deep impression on the Asian financial markets, with a series of impressive achievements including expanding its operations to more than 190 countries, attracting more than 16 million traders and more than 410,000 trusted partners. The success of FBS is also evidenced by the annual profit of its clients reaching an impressive figure of 500 million US dollars. From each country in which they operate, FBS has developed a separate website, with a total of 19 websites around the world.</p>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 20 }}>
                  <a href={URL_FBS} className={style.btn}>Visit website</a>
                </div>
                <div style={{ marginTop: 20 }}>
                  <a href={URL_FBS} className={style.btn} style={{ marginLeft: 50 }}>Đăng kí ngay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className={style.main}>
        <div id="advantage" className={style.marginTop25}>
          <div>
            <h3 className={style.titleh3}>1. Advantages and disadvantages</h3>
          </div>
          <table className={style.tableAccountMini}>
            <thead>
              <tr style={{ backgroundColor: "#fff" }}>
                <td style={{ width: "50%" }}> <p
                  style={{
                    color: "#00fe3e",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Advantage
                </p></td>
                <td> <p
                  style={{
                    color: "red",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Shortcoming
                </p></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    ✅ <span className={style.bold}>High Leverage:  </span>
                    FBS offers leverage levels of up to 1:3000, which allows
                    Transactions to take advantage of effective investment capital and increase profits
                    potential profits.
                  </p>
                </td>
                <td>   <p>
                  ❌ <span className={style.bold}>Transaction Fees:</span>
                  Although FBS offers account types with edge spreads
                  painting, but some fees may apply, such as the
                  swaps and withdrawal fees.
                </p></td>
              </tr>
              <tr>
                <td>  <p>
                  ✅{" "}
                  <span className={style.bold}>
                  Diversified trading platforms:
                  </span>
                  FBS offers popular trading platforms such as
                  MT4 and MT5, plus a mobile app for trading
                  on mobile devices.
                </p></td>
                <td> <p>
                  ❌ <span className={style.bold}>License:</span>
                  Although FBS has a license from IFSC Belize, some
                  Traders may want the exchange to have a license from the
                  other financial supervision such as the FCA or ASIC.
                </p></td>
              </tr>
              <tr>
                <td>   <p>
                  ✅{" "}
                  <span className={style.bold}>
                  Promotions:
                  </span>
                  FBS regularly organizes promotions
                  attractive such as deposit bonuses, trading contests and other
                  other valuable rewards.
                </p></td>
                <td> <p>
                  ❌{" "}
                  <span className={style.bold}>
                  Product limitations:
                  </span>
                  Although FBS offers a wide range of trading products,
                  But compared to some other exchanges, they may be limited in
                  Some product options such as stock code or
                  futures.
                </p></td>
              </tr>
              <tr>
                <td>  <p>
                  ✅{" "}
                  <span className={style.bold}>
                  Swap-free accounts:
                  </span>
                  FBS offers Islamic accounts for Muslims,
                  free swaps according to Sharia principles.
                </p></td>
                <td>
                  <p>
                    ❌{" "}
                    <span className={style.bold}>Risk Policy:</span>
                    The use of high leverage can increase risk, and
                    Traders must consider carefully when deciding to use
                    using large leverage.
                  </p>
                </td>
              </tr>
              <tr>
                <td>   <p>
                  ✅{" "}
                  <span className={style.bold}>Customer Support:</span>
                  FBS has 24/7 customer support through multiple
                  different communication channels including online chat, electricity
                  voice and email.
                </p></td>
                <td style={{ borderTop: 'hidden' }}></td>
              </tr>

            </tbody>
          </table>
          <div className={style.marginTop30}>
            <p>
            Currently, there are many exchanges on the market
              different brokers are active in the market. Selection
              give yourself a good, reputable and safe trading platform to be able to
              Trading trust is essential. Understanding that mentality,
              as well as the desire to help you avoid the
              scams are currently in the market. We've found out
              and share with you a Forex trading platform that is being
              a lot of traders trust to use it is{" "}
              <span className={style.colorUrl}> Floor FBS</span>
            </p>
            <p style={{ marginTop: 15 }}>
            To easily get acquainted and learn about the interface of FBS,
              you can Open a Demo Account or a Real Account to be able to
              make and follow their sharing and evaluation
              me below. As well as checking, trying to see{" "}
              <span className={style.colorUrl}> Floor FBS</span> is it really like what
              Have I reviewed?
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href={URL_FBS} target="_blank" rel="noopener noreferrer" className={style.btnRegister}>
              Register an FBS account here
              </a>
            </div>
            <div className={style.marginTop25}>
              <p>
              All of the information we share is based on
              Information provided from the homepage of{" "}
                <span className={style.colorUrl}> Floor FBS</span>,  as well as evaluating a
                our objective way. FBS is also one of the
                Exchanges we have experienced and believed in
                used all the time! We'll find out
                and Assessments <span className={style.colorUrl}>Floor FBS </span> {" "}
                follow each step below.
              </p>
            </div>
          </div>
        </div>
        <div id="regulations" className={style.marginTop25}>
          <div>
            <h3 className={style.titleh3}>2. Legal regulations</h3>
          </div>
          <p className={style.marginTop20}>
          According to our research,{" "}
            <span className={style.colorUrl}>FBS.com</span> is a brand and trademark that has
            registration is duly authorized to be operated by multiple
            companies vary by law and are licensed in the
            respective countries.
          </p>
          <p className={style.marginTop20}>
          FBS operates under the supervision and licensing of the IFSC organization
            (International Financial Services Commission) with license number
            IFSC/000102/198. This is one of the prestigious licenses and
            respected in the foreign exchange market industry, ensuring
            that all transactions take place fairly, transparently, and
            strictly comply with the regulations of the management agency.
          </p>{" "}
          <div className={style.banner350}>
            <Image
              src={fbs_giayphep}
              alt="Giấy phép của sàn FBS"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            FBS License{" "}
          </p>
          <p
            style={{
              marginTop: 25,
            }}
          >
            ▪️ HF Markets (Seychelles) Ltd, has a business code
            8419176-1, registered at Room S203A, 2nd Floor, complex
            Orion, Victoria, Mahe, Republic of Seychelles.
          </p>
          <p
            style={{
              marginTop: 25,
            }}
          >
             ▪️ HF Markets Fintech Services Ltd, with business code HE
            348222, registered at Spyrou Kyprianou 50, Irida 3 Tower
            7, Larnaca 6057, Cyprus.
          </p>
        </div>
        <div id="product" className={style.marginTop25}>
          <div>
            <h3 className={style.titleh3}>3. Trading Products</h3>
          </div>
          <p className={style.marginTop20}>
            FBS offers a wide range of trading products for traders
            Trade on their platform. Here are some products
            main ones that FBS offers:
          </p>

          <p className={style.marginTop20}>
            ▪️{" "}
            <span style={{ fontWeight: "bold" }}>
            Currency Pairs (Forex):
            </span>
            FBS allows trading on all popular currency pairs
            such as EUR/USD, GBP/USD, USD/JPY, and many others.
          </p>
          <p style={{ marginTop: 10 }}>
            ▪️ <span style={{ fontWeight: "bold" }}>Precious Metals:</span>
            You can also trade precious metals such as gold and silver on
            FBS exchange.
          </p>
          <p style={{ marginTop: 10 }}>
            ▪️{" "}
            <span style={{ fontWeight: "bold" }}>
            CFDs on Stocks:
            </span>
            FBS offers CFDs on popular stocks such as Apple,
            Google, Amazon, and many others.
          </p>

          <p style={{ marginTop: 10 }}>
            ▪️ <span style={{ fontWeight: "bold" }}>Goods:</span>{" "}
            In addition, FBS also offers trading CFDs on commodities such as
            crude oil and gas.
          </p>
          <p style={{ marginTop: 10 }}>
            ▪️ <span style={{ fontWeight: "bold" }}>Cryptocurrencies:</span>
            FBS offers the opportunity to trade cryptocurrencies such as Bitcoin,
            Ethereum, Litecoin, and many other cryptocurrencies.
          </p>
          <p style={{ marginTop: 10 }}>
            ▪️ <span style={{ fontWeight: "bold" }}>Energy: </span>
            Including 3 codes: Brent Crude Oil, Gas, WTI Crude Oil.
          </p>
          <p style={{ marginTop: 10 }}>
          These trading products allow traders to participate
            into various financial markets and diversify
            their investment association on FBS.
          </p>
          <div className={style.banner550}>
            <Image
              src={fbs_sanpham_giaodich}
              alt="Sản phẩm giao dịch đa dạng"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            Diversified trading products
          </p>
          <p className={style.marginTop25}>
          Traders who prefer to trade stocks may wish
            are offered a wider selection of stocks, especially
            small companies with higher volatility. With the quantity of goods
            Modestly traded (only energies, gold, and silver)
            this is not a real option for those who
            Trading focuses primarily on these assets. Despite this,
            gold, silver and energy can also serve the multi-purpose
            diversify and manage risk for traders.
          </p>
          <p className={style.marginTop25}>
          With a variety of trading products. Investors who have
            can choose for themselves the trading products that are suitable for the delivery
            translation. Currently, there are not many exchanges that have
            The number of products is so diverse. This is also the basis for
            We can consider this a reputable exchange or
            not?
          </p>
        </div>

        <div id="tradingPlatform" className={style.marginTop25}>
          <div>
            <h3 className={style.titleh3}>4. Trading Platforms</h3>
          </div>
          <p className={style.marginTop20}>
          FBS.com provides traders with delivery platforms
            popular translations today such as MetaTrader4, MetaTrader5 and the
            FBS Trader platform
          </p>
          <h4 style={{ marginTop: 15 }} id="fxgtMetaTrader4">
            4.1. FXGT MetaTrader 4 (MT4)
          </h4>
          <p className={style.marginTop20}>
          MT4 is still the world's most popular trading platform
            services, thus making it easy for traders to access and trade
            with FBS account in the most convenient and familiar way.
          </p>
          <p className={style.marginTop20}>
          The MetaTrader4 (MT4) trading platform is used by{" "}
            <span className={style.colorUrl}> floor FBS</span>, an option that has been chosen by the
            Worldwide trading trusted for many years. MT4
            has become the industry standard, although there are few indicators and
            More limited timeframe type than the latest version
            is MT5. Although some services and stocks may not be available
            available on MT4 as on MT5, but MT4 in return offers many
            more customizable and popular with many traders because of its ability to
            features that use more automated trading than MT5.
          </p>
          <h5 className={style.marginTop20}>
          Features of the MetaTrader 4 platform
          </h5>

          <p style={{ marginTop: 15 }}>
          FBS's MT4 trading platform likes a wide range of software
            Expert Advisors (EAs) are more than MT5. Distribution volume of
            The MT4 EA software is significantly larger. In addition, with MT4's
            FBS, you also have the ability to design your own EAs in
            proprietary programming language is called "MQL4". Therefore, MT4 is
            highly appreciated for those who mainly trade by delivery
            automatic translation and the desire for high flexibility in customization
            strategy.
          </p>
          <p className={style.marginTop20}>
          FBS MT4 offers high customizability with a wide range of applications
            different symbols such as horizontal lines, trend lines, Fibonacci
            regression, and much more. You have the freedom to customize and display
            live on MT4 charts. Along with the indicators,
            You can adjust the color, thickness, shape, and more
            Other attributes of the line shown for each object by
            their personal preferences. This creates an experience
            Flexible transactions and meet the customized needs of
            users.
          </p>
          <p className={style.marginTop25}>
          FBS MT4 offers the function of displaying multiple tables simultaneously
            in the form of independent windows. This gives you freedom
            using different indicators and Expert Advisors (EAs) on
            each chart that you are following. In addition, you can also
            Ability to execute transactions with different numerical settings for
            each chart, creating flexibility in management and implementation
            show your trading strategy on multiple markets
            at the same time.
          </p>
          <p className={style.marginTop25}>
          MT4 doesn't just support popular technical indicators such as lines
            moving averages and RSI, but also allows you to use multiple
            custom indicators. You can integrate into your trading
            many detailed analysis indicators such as price patterns and
            candlesticks, tools that are often rarely used. This
            providing flexibility and diversification in
            market analysis and trading strategy development of
            on MT4.
          </p>
          <div className={style.banner550}>
            <Image
              src={fbs_mt4}
              alt="FBS cung cấp nền tảng MT4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            FBS offers the MT4 platform
          </p>
          <h4 style={{ marginTop: 15 }} id="fxgtMetaTrader5">
            4.2. FXGT MetaTrader 5 (MT5)
          </h4>
          <p className={style.marginTop25}>
          MT5 is an upgrade of MT4, which is a fast, stable trading platform
            and versatile for all traders' needs. Basis
            This gives traders greater control over open positions
            and offers more investment strategies.
          </p>
          <p className={style.marginTop25}>
          In addition, MT5 offers 38 built-in technical indicators, 22
            analysis tools and 46 graphical objects, helping traders to
            features are added to enhance the trading experience. Background
            The platform is available in desktop versions (Windows,
            MacOS,...), web, mobile devices (both Android operating systems
            and iOS) in English and Japanese.
          </p>
          <h5 className={style.marginTop20}>
          Features of Metatrade 5 (MT5)
          </h5>
          <p className={style.marginTop25}>
          MT5 is the latest version of Metaquotes, which has been developed
            Dedicated to 64-bit computers, full use of parameters
            computer techniques to provide superior performance compared to
            MT4. Instead of being limited by a 32-bit system, MT5 is capable of handling
            processing big data at high speeds, helping the re-testing process to
            can be carried out in a short period of time. This
            Bring a smoother and more efficient trading experience to
            users.
          </p>
          <p className={style.marginTop25}>
          Compared to MT4, MT5 has evolved with the emergence of more
            80 types of technical indicators, a significantly higher number than
            with over 50 types of indicators previously available on MT4. Rise
            The number of indicators makes MT5 a platform
            powerful for technical analysis, offers a wide range of options, and
            Supporting tools for traders. With handling power
            enhanced, MT5 is capable of running smoothly even if
            You are displaying multiple indicators, expanding your analytical capabilities
            your.
          </p>
          <p className={style.marginTop25}>
          MT5 not only supports the usual ordering method but also
            and added a new function called "Stop Limit Order,"
            Flexibility in choosing an ordering method
            depending on the specific situation in many delivery scenarios
            different translations. By using multiple order placement methods
            different, you can expand your trading style
            and enjoy the variety of your trading strategies
            on MT5.
          </p>
          <p className={style.marginTop25}>
          FBS MT5 has improved the EA (Expert
            Advisor) to optimize the automated trading experience. With
            many EA software available, even beginners can
            Easily start testing and deploy automated trading
            on this platform. The strategy testing function has been updated
            website, which helps verify EA more accurately, bringing the possibility of
            the ability to evaluate the performance of the EA software in detail and
            more comprehensive.
          </p>
          <div className={style.banner550}>
            <Image
              src={fbs_mt5}
              alt="FBS cung cấp nền tảng MT5"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            FBS offers the MT5 platform
          </p>
          <h4 style={{ marginTop: 15 }} id="fxgtMetaTraderFbs">
          4.3 FBS Trader Platform
          </h4>
          <p style={{ marginTop: 15 }}>
          FBS Trader app is a brand new trading platform
            from FBS, giving users an effective trading experience
            fruitful and convenient. With many notable features such as:
          </p>
          <p className={style.marginTop20}>
            <span className={style.bold}>Variety of currency pairs and products</span>: Trade more than 50 currency pairs
            currencies, metals, indices and stocks, helping you find the
            trading associations in many different markets.
          </p>
          <p className={style.marginTop20}>
            <span className={style.bold}>Real-time statistics and easy order management</span>: : Monitor the market and manage your orders efficiently
            with real-time information and a simple management interface.
          </p>
          <p className={style.marginTop20}>
            <span className={style.bold}>Follow live rate charts</span>: Easily follow the rate chart in real-time, so you don't miss any
            opportunities in the market.
          </p>
          <p className={style.marginTop20}>
            <span className={style.bold}> Edit orders and manage accounts easily</span>: Customize and manage your trading orders with just a few clicks,
            and set up the account according to your wishes.
          </p>
          <p className={style.marginTop20}>
            <span className={style.bold}>Fast deposits and withdrawals</span>: Make margin trades and withdrawals quickly through more than
            100 different payment systems.
          </p>
          <div className={style.banner450}>
            <Image
              src={fbs_trader}
              alt="FBS cung cấp nền tảng FBS Trader"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            FBS offers the FBS Trader platform
          </p>
          <p className={style.marginTop20}><span className={style.bold}>24/7 customer support</span>: Powered by a professional team, 24/7 customer support in multiple languages
          different words to answer all your questions.</p>
          <p className={style.marginTop20}><span className={style.bold}>Access from any mobile device</span>: Easily access and make transactions from any iOS or Android device, helping you
          active in trading anytime, anywhere.</p>
        </div>

        <div id="tradingAccount" className={style.marginTop25}>
          <div>
            <h3 className={style.titleh3}>
            5. Types of trading accounts
            </h3>
          </div>
          <p className={style.marginTop25}>
          FBS offers a wide range of account types to suit the needs and qualifications of investors. These include:
          </p>
          <p style={{ marginTop: 15 }}>
            ▪️{" "}
            <span style={{ fontWeight: "bold" }}>
            Cent Account:
            </span>
            Suitable for beginners or those who want to experiment with new strategies. This account
            Trade with cent volumes, with an initial margin from as little as $1, spreads as low as 1 pip, and no commissions.
          </p>
          <p style={{ marginTop: 15 }}>
            ▪️{" "}
            <span style={{ fontWeight: "bold" }}>
            Micro Account:
            </span>
            For investors with little experience. Initial margin is $5, support leverage up
            to 1:3000, and fixed spreads from 3 pips.
          </p>
          <p style={{ marginTop: 15 }}>
            ▪️{" "}
            <span style={{ fontWeight: "bold" }}>
            Standard Account:
            </span>
            Ideal for those who want to experience traditional trading. No flower fee
            Commissions, competitive spreads, and leverage up to 1:3000.
          </p>
          <p style={{ marginTop: 15 }}>
            ▪️{" "}
            <span style={{ fontWeight: "bold" }}>
            Zero Spread Account:
            </span>
            There are no spreads, which increases earnings and makes more accurate predictions, although
            There is a commission fee of $20 per lot.
          </p>
          <p style={{ marginTop: 15 }}><span style={{ fontWeight: "bold" }}>
          ECN Account:
          </span>For professional traders, allowing direct trading between parties without the need for
            through intermediaries. The initial margin is $1000, with extremely competitive spreads and unlimited open positions, and
            maximum pending order.</p>
          <div className={style.banner450}>
            <Image
              src={fbs_account_giaodich}
              alt="FBS cung cấp 5 loại tài khoản giao dịch"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            FBS offers 5 types of trading accounts
          </p>
        </div>


        <div id="expense" className={style.marginTop25}>
          <div>
            <h3 className={style.titleh3}>6. Fees and Leverage</h3>
          </div>
          <h4 className={style.marginTop20} id="expenseAccount">
          6.1. Spread fees
          </h4>
          <p style={{ marginTop: 15 }}>
          In order to help clients reduce trading costs and maximize profits, FBS has established relatively tight spreads
          nest, including 2 types of fixed and floating spreads. Here are the specific spreads for each account type:
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>Standard</span>: Floating spreads from 0.5 pips.
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>Cent, ECN:</span> Floating spreads from 1 pip.
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>Zero Spread:</span> Fixed spreads from 0 pips.
          </p>

          <h4 className={style.marginTop20} id="expenseSwap">
          6.2. Swaps
          </h4>
          <p className={style.marginTop20}>
          When it comes to swaps, FBS applies fixed fees for all types of real accounts. For CFD trading and
          stocks, swaps are fixed at -1 and -0.1 respectively for both long and short positions.
          </p>
          <p className={style.marginTop20}>
          However, for trading forex pairs and metals, the swap fee will vary depending on whether you open a long or short position.
          </p>
          <p className={style.marginTop20}>
          FBS automatically calculates and reports all swap costs on your open positions. You can look up the swap fee at the FBS website.
          </p>
          <p className={style.marginTop20}>
          For futures CFD contract trades, all orders will be closed at the final price.
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>Is FBS swap-free?</span>
          </p>
          <p className={style.marginTop20}>
          FBS offers a swap-free program to Muslim clients, adhering to Sharia principles. This means that
            with FBS Islamic accounts, you will not be charged overnight interest charges. To activate your Islamic account, you need to contact
            FBS support team and provide proof of their Islam.
          </p>


          <h4 className={style.marginTop20} id="expenseDonBay">
          6.3. Leverage
          </h4>
          <p className={style.marginTop20}>
          FBS allows the use of leverage levels from 1:1 to 1:3000, which is considered the highest in the forex market.
          However, the maximum leverage level depends on the type of account you are using:
          </p>
          <p style={{ marginTop: 15 }}>
            <span style={{ fontWeight: "bold" }}>  Standard, Micro, Zero Spread Accounts</span>: Mức đòn bẩy tối đa là 1:3000
          </p>
          <p style={{ marginTop: 15 }}>
            <span style={{ fontWeight: "bold" }}>Cent Account:</span> The maximum leverage is 1:1000
          </p>
          <p style={{ marginTop: 15 }}>
            <span style={{ fontWeight: "bold" }}>ECN Account: </span> The maximum leverage is 1:500
          </p>
          <p style={{ marginTop: 15 }}>
            <span style={{ fontWeight: "bold" }}>Crypto Accounts:</span>The maximum leverage is 1:5
          </p>
          <p className={style.marginTop20}>The use of leverage in forex trading is equivalent to a "double-edged sword". It can help traders increase their profits
            many times, but at the same time, it also increases the risk if the market is not favorable. Therefore, the use of leverage
            It requires caution and a deep understanding of the market on the part of the trader.</p>
          <div className={style.banner350}>
            <Image
              src={fbs_donbay}
              alt="Đòn bẩy lên đến 1:3000"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            Leverage up to 1:3000
          </p>
          <p className={style.marginTop25}>Trading highly leveraged products can optimize a trader's profits, but of course, also increase
            the possibility of losses. Therefore, when trading with high leverage, traders need to have a plan for capital management and risk management
            ro effectively.</p>
        </div>
        <div id="withdrawMoney" className={style.marginTop25}>
          <h3 className={style.titleh3}>
          7. How to deposit and withdraw funds on FBS
          </h3>
          <p className={style.marginTop20}>
          Currently, FBS supports clients to deposit and withdraw funds through a wide range of payment gateways, facilitating the process
          clients' transactions. Payment methods include:
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>Bank Transfer</span>: FBS supports popular banks such as Vietcombank, Vietinbank, Eximbank for deposits and withdrawals.
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>Tag Visa/Mastercard: </span>Clients can use Visa or Mastercard cards to fund their trading accounts.
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>E-wallets: </span> FBS accepts e-wallets such as Neteller, Skrill, Perfect Money, Sticpay for quick and convenient transactions.
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>The processing time for margin orders is instantaneous. For withdrawals, the processing time depends on the payment method</span>
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>Withdrawal via electronic payment system and bank transfer: </span>Usually processed within 1-2 hours.
          </p>
          <p className={style.marginTop20}>
            <span style={{ fontWeight: "bold" }}>Withdrawal via Visa card:</span> It can take 5-7 days to complete the process.
          </p>
          <p className={style.marginTop20}>
          FBS does not charge margin fees for funds deposited into trading accounts. However, when withdrawing funds, customers will
          incur a small fee, the details are as follows:
          </p>
          <p>Visa/Mastercard withdrawals: 1 USD – 1 EUR per withdrawal.</p>
          <p>Withdrawals via Internet banking: 2%.</p>
          <p>Withdrawal via Neteller: 2% + commission (Minimum 1$ per transaction, maximum 30$).</p>
          <p>Skrill withdrawals: 1% + 0.32% commission.</p>
          <div className={style.banner350}>
            <Image
              src={fbs_nap_rut_tien}
              alt="Nạp tiền và rút tiền trên sàn FBS"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            Deposits and withdrawals on FBS
          </p>
        </div>
        <div id="transaction" className={style.marginTop25}>
          <h3 className={style.titleh3}>8. Trading Promotions</h3>
          <p style={{ marginTop: 15 }}>
          FBS not only has attractive offers for new clients, but also a lot of promotions
          forever special for loyal customers. This helps FBS attract more than 80% of loyal old clients.
          </p>
          <h5 style={{ marginTop: 15 }}>
          Here are some of the outstanding promotions at FBS:
          </h5>
          <p style={{ marginTop: 10 }}>
            <span style={{ fontWeight: "bold" }}>100% Unlimited Bonus on First Deposit</span>: FBS offers a large bonus of up to 100% for the first deposit of new clients.
          </p>
          <p style={{ marginTop: 10 }}>
            <span style={{ fontWeight: "bold" }}>Cashback per lot traded:</span>This is an exclusive program only available at FBS, clients have the opportunity to get up to $15 back per lot traded.
          </p>
          <p style={{ marginTop: 10 }}>
            <span style={{ fontWeight: "bold" }}>Level-up bonuses:</span>By opening a level-up bonus account in the FBS Personal Area, clients can get $70 or $140 for free.
          </p>
          <p style={{ marginTop: 10 }}>
            <span style={{ fontWeight: "bold" }}>Participate in contests to win valuable prizes: </span> FBS often holds competitions with big prizes such as luxury cars.
          </p>
          <p style={{ marginTop: 10 }}>
            <span style={{ fontWeight: "bold" }}>Bonus for the number of lots traded: </span>Clients have the opportunity to participate in negotiating the maximum number of lots to receive shares
            valuable gifts, including tickets to Barcelona's home match, round-trip airfare, hotel accommodation, museum visits
            Barça, Camp Nou stadium and participate in special FBS events.
          </p>
          <div className={style.banner450}>
            <Image
              src={fbs_chuong_trinh}
              alt="Các chương trình khuyến mãi từ sàn FBS"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#4d4d4d",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            Promotions from FBS
          </p>
        </div>

        <div id="finish" className={style.marginTop25}>
          <h3 className={style.titleh3}>9. Epilogue</h3>
          <p className={style.marginTop25}>
          FBS has become an attractive choice thanks to its variety of trading tools, intuitive platforms, and
            effective customer support service. The broker's commitment to providing low minimum deposits,
            Competitive disparities and rich educational materials have made FBS an accessible option
            and attractive to traders of all experience levels.
          </p>
          <p className={style.marginTop20}>
          However, to ensure that FBS is suitable for each person's needs, it is important to conduct thorough research beforehand
            When deciding to trade is very important. This includes evaluating transaction requirements, determining strategies
            and accept the appropriate level of risk for each individual.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={URL_FBS} target="_blank" rel="noopener noreferrer" className={style.btnRegister}>
            Register an FBS account here
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
