import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        data-testid="body"
        /*

                           {}           {}
                             \  _---_  /
                              \/     \/
                               |() ()|
                                \ + /
                    ejm 96     / HHH  \
                              /  \_/   \
                            {}          {}


        */
        /* !!!!!!!!!!!!!!!DO NOT EDIT THIS CLASS!!!!!!!!!!! */
        className="no-gds-typeface"
        /*
        The Catholic Data Dashboard is not a GOV.UK service, therefore we cannot use the GDS Transport typeface
        Read all about it: https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk#if-your-service-isnt-on-govuk 
        The css class 'no-gds-typeface' makes extra triple sure that we do not use the GDS Transport typeface anywhere on our website. 
        */
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
