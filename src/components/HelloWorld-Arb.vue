<template>
  <div class="hello">
    <div class="banner" style></div>
    <hooper :playSpeed="2000" :autoPlay="true">
      <slide>
        <div class="toget-sec">
          <div class="container">
            <h1>"النجاح هو مجموع الجهود الصغيرة، المتكررة يوما بعد يوم."</h1>
          </div>
        </div>
      </slide>
      <slide>
        <div class="toget-sec">
          <div class="container">
            <h1>تقديم التميز هو أولويتنا</h1>
          </div>
        </div>
      </slide>

      <slide>
        <div class="toget-sec">
          <div class="container">
            <h1>معا ننجح!</h1>
          </div>
        </div>
      </slide>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <div class="about">
      <h1>نبذة عنا</h1>
      <span></span>
      <p>شركة ال ناصر للاستثمار هي شركة رائدة في مجال الاستثمار ولها سجل حافل بالتميز يعود تاريخه إلى أكثر من 40 عامًا.</p>
      <p>تحتفظ شركة ال ناصر للاستثمار بملف إستراتيجي تنافسي عالمي من فئات الأصول والأصول الفرعية، بما في ذلك الاستثمارات عبر الأسواق المحلية والدولية. لقد اعتمدنا القيم والسلوكيات الأخلاقية التي نتبعها كمجموعة أو أفراد في عملنا.</p>
      <p>إن أي فكرة عمل هي مجرد فكرة عادية. لكن الفكرة المدعومة بمنطق واضح ، واستراتيجية عمل قوية ، وفريق خبير تصبح أكثر من فكرة، فهي مشروع استثماري كبير يستحق المباشرة بالتنفيذ فورًا</p>
    </div>

    <div class="about-image-box">
      <div class="about-image"></div>
    </div>

    <div class="fluid-box">
      <div class="fluid-left">
        <p>لقد سمح لنا توسعنا على مستوى المملكة ببناء جو ديناميكي يجلب رؤى جديدة لأي تحد وفرصة. نتيجة لذلك ، اكتسبنا نطاقات متعددة وواسعة من التصورات والخبرات ، مما شجع قوتنا ووسع استثماراتنا المحلية والدولية. نحن منفتحون على المزيد من الاستثمارات والفرص الجديدة. هدفنا هو الاستثمار في قطاعات جديدة وبناء محفظة قوية تكون معروفة في جميع أنحاء العالم. أيضًا ، نود أن يكون لدينا شركاء أعمال جدد. نعتقد أن التنوع يشجع الأداء. نحن لا نحترم الاختلاف فقط ؛ نحن نبحث بوعي عن الفرق ونرحب به</p>
      </div>
      <div class="fluid-right">
        <div class="fluid-image"></div>
      </div>
    </div>

    <section class="contact" id="contactus">
      <div class="sec-padding" style="padding-bottom:0px;">
        <div class="contact-head">
          <h1>اتصل بنا</h1>
          <span></span>
        </div>
        <div class="map">
          <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7580750.020638232!2d72.55749969601706!3d21.913855825601452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1595683184745!5m2!1sen!2s"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0; margin-bottom: 35px;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>-->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.296424991509!2d67.11549711432139!3d24.921969848928693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338c29d7489c5%3A0x4adc541f71acb866!2sKing&#39;s%20Tower%2C%20Block%2015%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1595925380496!5m2!1sen!2s"
            width="100%"
            height="390"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="contact-detail">
            <div class="contact-detail1">
              <div class="inqui">
                <h4>اتصل بنا</h4>
                <p>
                  يرجى استخدام الطرق التالية للاتصال بنا سواء كان لديك عرض أو شراكة تجارية أو استثمار أو طلب لوظيفة.
                  <!-- <br>proposal, inquiries, investment, or job application. -->
                </p>
              </div>
              <div class="contact-form">
                <!-- <h4>Contact Us</h4> -->
                <div class="formm">
                  <div class="detail">
                    <label>Enter Your Name</label>
                    <input type="text" name="Name" placeholder="Name" />
                  </div>
                  <div class="detail">
                    <label>Enter Your Email</label>
                    <input type="email" name="Email" placeholder="Email" />
                  </div>
                  <div class="detail">
                    <label>Enter Your Subject</label>
                    <input type="text" name="Subject" placeholder="Subject" />
                  </div>
                  <div class="detail">
                    <label>Enter your message</label>
                    <!-- <input type="text" name="Message" placeholder="Message" style="height: 150px;"> -->
                    <textarea placeholder="Message"></textarea>
                    <a href>Submit</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-detail2">
              <div class="inqui">
                <h4>Head Office</h4>
                <p>
                  المملكة العربية السعودية - جدة - طريق الملك عبد العزيز
                  <br />برج الملك ، الطابق العاشر ، 1009.
                </p>
              </div>
              <ul>
                <li>
                  <img src="../assets/img/lo.jpg" />
                  <span>صندوق بريد 2388، جدة 21436</span>
                </li>
                <li>
                  <img src="../assets/img/phone.png" style="width: 21px;
    margin-top: 8px;" />
                  <span>هاتف: 012 606 0443</span>
                </li>
                <li>
                  <img src="../assets/img/envo.png" style="width: 20px;
    margin-top: 7px;" />
                  <span>
                    www.alnassercompany.com
                    <br />info@alnassercompany.com
                  </span>
                </li>
              </ul>
              <div class="social">
                <h4>Stay In Touch</h4>
                <ul>
                  <li>
                    <img src="../assets/img/link1.png" height="22" width="22" />
                  </li>
                  <li>
                    <img src="../assets/img/face.png" style="    height: 22px;
    width: 25px;" />
                  </li>
                  <li>
                    <img src="../assets/img/twitter.png" style="    height: 21px;
    width: 24px;" />
                  </li>
                  <li>
                    <img src="../assets/img/insta.png" height="22" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="sub-box">
      <div class="sub-btn-box">
        <a href>Submit</a>
      </div>
      <div class="sub-line-box">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "HelloWorld",
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  mounted() {
    var section = this.$router.currentRoute.hash.replace("#", "");
    if (section)
      this.$nextTick(() =>
        window.document.getElementById(section).scrollIntoView()
      );
  },

  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<style scoped>
/* For demo */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

/* img {
  height:600px;
  width:100%
} */

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
