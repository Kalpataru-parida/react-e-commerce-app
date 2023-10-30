import React from "react";
import { useEffect, useState } from "react";
import { getAllCategory, getSingleCategory } from "../../service/Catagory";
import { Grid, Stack, Tab, Tabs } from "@mui/material";
import ComponentCard from "../../component/Card/ComponentCard";
function HomePage() {
  const [type, setType] = useState(0);
  const [data, setData] = useState([]);
  const [singleCategory, setSingleCategory] = useState([]);
  async function allCategory() {
    const res = await getAllCategory();
    if (res.isSuccess) {
      setData(res.data);
    }
  }
  async function singleType() {
    let params;
    if (type === 0) params = "electronics";
    if (type === 1) params = "jewelery";
    if (type === 2) params = "men's clothing";
    if (type === 3) params = "women's clothing";
    const res = await getSingleCategory(params);
    if (res.isSuccess) {
      setSingleCategory(res.data);
    }
  }

  useEffect(() => {
    allCategory();
    singleType();
  }, [type]);
  return (
    <>
    <Stack>
      <Tabs
        value={type}
        onChange={(event, newValue) => {
          setType(newValue);
        }}
        style={{
          backgroundColor: "#2C2606",
          zIndex: "1",
          paddingBottom: 3,
          margin: "10px",
          position: "fixed",
          top: "50px",
          width: "100%",
        }}
        aria-label="disabled tabs example"
      >
        {data &&
          data.map((e, i) => {
            return (
              <Tab key={i} style={{ width: "23%", color: "white" }} label={e} />
            );
          })}
      </Tabs>
      <Grid container spacing={2}>
        {" "}
        {singleCategory &&
          singleCategory.map((e) => {
            return (
              <ComponentCard
                key={e.id}
                title={e.title}
                count={e.rating.count}
                category={e.category}
                desc={e.description}
                img={e.image}
                price={e.price}
                id={e.id}
              />
            );
          })}
      </Grid>
      </Stack>
    </>
  );
}

export default HomePage;
