import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Imię</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Tekst wiadomości</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Wyślij" className="special" />
            </li>
            <li>
              <input type="reset" value="Skasuj" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="#">biuro@zoliborz.zhp.pl</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fab fa-facebook"></span>
            <h3>Social media</h3>
            <a href="https://www.facebook.com/ZHP.Zoliborz">
              https://www.facebook.com/ZHP.Zoliborz
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Adres</h3>
            <span>
              Hufiec ZHP Warszawa-Żoliborz
              <br />
              ul. Przybyszewskiego 32/34
              <br />
              01-824 Warszawa
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
