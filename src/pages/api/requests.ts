import base_service from "@/service/base_service";

export async function GetDataEventFake() {
  try {
    const response = await base_service.get({
      api: "https://node-fake-api-server.herokuapp.com/eventos",
      params: {
        headers: {
          ContentType: "application/json",
        },
      },
    });
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
}

export async function setDataEventFake(data: object[] | undefined) {
  try {
    const response = await base_service.post({
      api: "https://node-fake-api-server.herokuapp.com/eventos",
      data: data,
      params: {
        headers: {
          ContentType: "application/json",
        },
      },
    });
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
}
export async function sendEmailFake(data: object | undefined) {
  try {
    const response = await base_service.post({
      api: "https://node-fake-api-server.herokuapp.com/email",
      data: data,
      params: {
        headers: {
          ContentType: "application/json",
        },
      },
    });
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
}
