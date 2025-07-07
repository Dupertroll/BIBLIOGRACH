import Header from "../components/Header/Header";
import ButtonFilter from "../components/ButtonFilter";
import BookGrid from "../components/BookGrid";

const bookImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWuHXjC2nsMMd3whvyWtgaihmTNWzALc7dPcK2il8L6fotTFOeT-bX1iydWNv3ag000uiURyuPamglDZG-5w-LAvJR5md_BRG4ve6FQ99XY62ph9HJCRqVj5lerK5zQjC7c68fCR-DzsEsGg7L3Mu8U4ELhng-DvsQv_Ik_DCZPvwG9K-MmS26IEI4GztkwO-TYBwsekwImMKzEDfJblRFycFB7R8AmpCrDffvN3h3ATxBhYMdTVpAVK28k1JnCT9G36s8kp1LQEP9",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBKDColowml9-c7RR0b7nwMqOkhtFAkCW3PqX3b73-ecsF9Pph-NUX_Rj2CGsWbFvykcwK6NO78_FeLBSDSfRIQ2KkgxDGCwLcUeSA23RvfyF1YoqcUf6vDoZzfmQbS2uXD9xs576L4sJwcNzsgNgSUBcA8-3G7VYVX-2xlMmlT9XfRGKeP-zoRYRmpEnWdp9Zi9-eGYzOAnO_olIhllMd6mGlokRmaumqmp9I1NbdW9DnG60MZcJ9Wyi1fxe23W98C9qwqHh4YNoHw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCB1ubPWJzr8W-YtpeUF8_dT3TJOrz9xKN1LZYiFChm0aYwUSjZO6qEBSx9SThlSCO8Q55Z2fTnANfdot4DPtE6OxklAnUmUVTgwV35ruEIH1LVOymKq19FOdq0zbOQqnYz9--VATN4MmY1mZo-dn-qkQGyHE6B1n_qoMZEbDJm4e_6zmqlt2daG9rHdLq_2BpjrpT7KJnBPECXdlLw4WGs_mvX7r9VJ9JccLYqGfcOM-zZRUeMY8WUEhTFzv87v2mQWznBDBQchf78",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Fz5-rIhd0ahNsOYEDQ9vRGJro3tXgr7bXACcP2zK38X3Kh_HQM6gc6MeKP2xlCZSeDr1pqSHpjBopgZIAiVHQkEaW0Cf6PpBUqcXGNow5wlMR-T71gJRTFRIlJ4k_2WV_-mScyzfUGSZNx9eEM08DgtF2KW6vf5jcNl74TttWCTpEALuvSAqwOPg2VOFnjos_XFvZ-jDuIpJpxJU2EGlNq05VAUxRiW8My_ulp9ObqpuSs7nyHBvsN0hdT5RkuYEWunUky6dUc1t",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBRSzOFHpoQgjZTzpucRd1o2M6oA3UfNYeJzuJlCEQZlyVBWmRonaXUCe9A77azyjcCmjUkeHK8ha_j6HDpNXGwC9NGjUl9D2w4ei8pGpnGbl3uUyOoSpJY4Dqe01wd48aT6QVFK-hVkgWSOJPE3ZwRQ_AfdmOhiUqGP7sbCZOJOFQQbphVoGZWYbT2puZDu5DGNyVTn9UU_Ft7j9POTO3O7boyAGOjgcWYqVb1VeP3WCB9MsWzShZ3LHyW-bmUz4p9sicgqJWqHGJx",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCK79DWWVADngNWaTc4dNQ1IK_ZlNeU8yhjYWKJP5besibn3EZeI3XxxEvXaDX-vjdH_-QNKvwLCUO_4fS1a_QQGzQyKjwb4_sCGW84FBjXQc2OzgAaFm5v085EvZ0imQp4YXu5qgZgrDjgvVImHsmytMUXsSy5uVqvdkgNhF6GPja7sUu1wJD6Jkpj8Rbe9TKtxcu9gKZUg-7tZ9ZHnDUnVA7gpsEX7lbXwpTIcaVlOt-ec2SyTz6y_4mjNWxGATHHam7ih-btMwEK",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCT55bLCrYYlkvGA6OxAt_Sf4aLM4OUKrv3qp0QKE0Sf3BL2Y11-ZOTyzLYO75wp2NwFdiz6jItF6qJle1f4kRFy7vLXYe8-rVyR-rd1Sz6mnv_aQHaM2OzNkt9xD5ZVWXe4WL3El1mQVxYi5tv34zkAkHqFzSVQFyEtBY5iRA2PKM-J4myHlcQjKvgJrzJQ3924VLlC5s4LQGw7Em1X0gvG9H9pVNF8juuA_QTbhm3wqNuahN-Qd5XKEb1RDxb7vluPA_Ccg5mSBtj",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsdA0BSVqwwpMqkISlW-NpiZivPVeQ2qVqGFSFBwwFhb50hUGlSqoIRiSxbA83bxCoKVsoPLdMs8QZenqIf9nF_Lyf5lZjHw-bu1Jsz6nT4spEosvP-x7pRd1ppjH23J1tUycJ_HR78UJZ7FrlkCk8Tyyt0VcfoN6HBYM_mwXpPe9oHkUe3DEmt98kQrOGr0CTeB2fKiJK0bVHnpQ9-wh0bJ_u2eFcaI7VOrr9aUqTM1N-UsAZ0PQtoa2ch3t7bcyohnv9jqX0gvWl",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBL7gyjf3jl6i-q38GX7df19J-8BKMqxLaUB6IXih_FDBy4isY_l-QIDM7gXN5MeKdS0yDNc1W3CyOBNhMkD69Xw1FMkMkZYEsgmT5cmG7_wMIhy5YyxtdoTW_-klRP0asExRPblUHrdLgUH0a6G3MW3IO33O62yhkQ_Z4DQh3GFTnLMvy7cJY8KZ8AQzkH8PkNDL0F2K4X4pNFtQ9puJuF_meY_E6NIa24xssCZK4qX2tIXIVi2kOf7Poq9QFxGvsaS5vAPS4AfnxQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBAfu16LGWsrc8Cz6-FAEfaqmXOUHRJ57j0OHR7XJnLyPRFGG-cDqv0cjxMHqVJXmsmI1VtzYJgwrPuwowOSxw5Gl2zFFOnSYMEXNEJ91Zh4lfJYqNwMJ3migj7qbXmsXo-RlvcWxDGmmrE0dZBaCWyxO6S0ZR9UmkYHQMSILA3t4d2OkqXOSRfWQx4kXn9N4zO4ZJIFz9OA-Tog3mrxnRvdHtMsHamK-JBBsqhjJpH2WNPnbUtG41KbIEl5qbNLPsGZBYoAbms1vHd",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtSDA2-HRmxFnM8q-qTWb92vIqIemET-e-k3nOIFBZuP8QzUUk7pEd2puufTcIWrYHg03qj7OwFdKn8siXYRjA3GIi8EMXuY0Z1RdoPik02SkfTwwYIoiHRInbccblkjXENSPJLNShkwIFX7mdtLgfDGiqo528o2yTSqHc0zp9eqwECSdGsj6RfDQ0VJpOzR6UyhXNCapjaEbM7mm_MqnEkX2oYe-Z3MoDRAg6Utt1BL-R62t4i5ZRLZyAI8l5kJnxL5yAu51bEvUY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWiuVUofFwcixc8OVgQgLqf8WNl22hB145mOjp7duOrDG4hi6NujQwH6eMXH8vA0vOkxiA68XdjUhARPf3jMNybiz2IX_SA1rbhTg28UG7QH21yS8XnEh0m5OBe72GNiRp7pj8r85g3eQS880hjPyucMbxVWFtB8zVvtxfGpQHPnxyggtfqcM87GhhQwAfZWuLsEo-TbItBiaASXz4gIdefYZRNXI8T3rCYpZqPCiB75rIYSjaqQ-fYHw5PJC9AUoPYU1EFXVtAnQu",
  "https://images.cdn1.buscalibre.com",
];

export const CatalogPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#111418] text-[28px] font-bold px-4 text-left pb-3 pt-5">
              Explora nuestra colección
            </h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {["Género", "Autor", "Popularidad"].map((label) => (
                <ButtonFilter key={label} label={label} />
              ))}
            </div>
            <BookGrid bookImages={bookImages} />
          </div>
        </div>
      </div>
    </div>
  );
};
