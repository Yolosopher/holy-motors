import React, { useEffect, useState } from "react";
import "./clients.style.scss";
import clientsData from "./clientsData";
import Loader from "../loader/Loader";
import ClientInfiniteSlider from "./ClientInfiniteSlider";

const fetchFakeClients = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(clientsData);
    }, 1);
  });
};

const Clients = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState({
    firstRow: [],
    secondRow: [],
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const data = await fetchFakeClients();
        const dataLength = data.length;

        const isOddQty = dataLength % 2 !== 0;

        const payload = {};

        if (isOddQty) {
          payload.firstRow = data.slice(0, Math.ceil(dataLength / 2));
          payload.secondRow = data.slice(Math.ceil(dataLength / 2));
        } else {
          payload.firstRow = data.slice(0, dataLength / 2);
          payload.secondRow = data.slice(dataLength / 2);
        }
        setClients(payload);
        // const { data } = await axios.get("/clients");
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  return loading ? (
    <Loader isFullScreen={true} />
  ) : err ? (
    <h1>{err}</h1>
  ) : (
    <section className="clients-section" id="clients">
      <h2>clients</h2>
      <div className="marquees">
        <ClientInfiniteSlider row={clients.firstRow} reverseDirection={true} />
        <ClientInfiniteSlider
          row={clients.secondRow}
          reverseDirection={false}
        />
      </div>
    </section>
  );
};

export default Clients;
