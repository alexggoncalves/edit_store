import aboutImage from "../../../assets/journal/about.jpg"

const About = () => {
  return (
    <section id="about" class="paddingverticaldouble">
      <h2 class="textcenter marginbottomfull">About</h2>
      <div class="gridrow">
        <div class="col-12 col-t-6">
          <img
            class="imgfit"
            //srcset="imgs/journal/about.jpg 720w, imgs/journal/medium/about.jpg 410w, imgs/journal/small/about.jpg 450w"
            sizes="(min-width: 1200px) 720px, (min-width: 750px) 410px, 450px"
            src={aboutImage}
          />
        </div>
        <div class="col-12 col-t-6 about">
          <p class="margintopnone">
            The partnership between renowned Japanese fashion designer, Yohji
            Yamamoto and authentic sports brand, Adidas, has revolutionized the
            industry. Adidas represents sport, Yohji Yamamoto represents design,
            and both symbolize true craftsmanship. Together they have developed
            the future in sportswear.
          </p>
          <p>
            <span class="fancytext">Adidas and Yamamoto together since</span>
            October 2002
          </p>
          <p class="marginbottomnone">
            <span class="fancytext">The symbols</span>
            The "Y" stands for Yohji Yamamoto
            <br />
            The "3" represents the signature Adidas three stripe logo
            <br />
            the "-" signifies the link between the two
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
