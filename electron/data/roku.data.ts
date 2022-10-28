const macAddresses = [
  {
    mac_prefix: "00:0D:4B",
    type: "MA-L",
    registration_date: "2003-06-01",
  },
  {
    mac_prefix: "08:05:81",
    type: "MA-L",
    registration_date: "2015-11-17",
  },
  {
    mac_prefix: "10:59:32",
    type: "MA-L",
    registration_date: "2019-09-17",
  },
  {
    mac_prefix: "20:EF:BD",
    type: "MA-L",
    registration_date: "2020-11-03",
  },
  {
    mac_prefix: "7C:67:AB",
    type: "MA-L",
    registration_date: "2022-04-12",
  },
  {
    mac_prefix: "84:EA:ED",
    type: "MA-L",
    registration_date: "2020-04-15",
  },
  {
    mac_prefix: "88:DE:A9",
    type: "MA-L",
    registration_date: "2016-06-27",
  },
  {
    mac_prefix: "8A:C7:2E",
    type: "CID",
    registration_date: "2016-02-25",
  },
  {
    mac_prefix: "8C:49:62",
    type: "MA-L",
    registration_date: "2019-05-07",
  },
  {
    mac_prefix: "A8:B5:7C",
    type: "MA-L",
    registration_date: "2021-08-23",
  },
  {
    mac_prefix: "AC:3A:7A",
    type: "MA-L",
    registration_date: "2014-08-20",
  },
  {
    mac_prefix: "AC:AE:19",
    type: "MA-L",
    registration_date: "2018-08-05",
  },
  {
    mac_prefix: "B0:A7:37 ",
    type: "MA-L",
    registration_date: "2014-03-11",
  },
  {
    mac_prefix: "B0:EE:7B",
    type: "MA-L",
    registration_date: "2016-09-22",
  },
  {
    mac_prefix: "B8:3E:59",
    type: "MA-L",
    registration_date: "2012-10-05",
  },
  {
    mac_prefix: "B8:A1:75",
    type: "MA-L",
    registration_date: "2015-12-03",
  },
  {
    mac_prefix: "BC:D7:D4",
    type: "MA-L",
    registration_date: "2021-05-11",
  },
  {
    mac_prefix: "C8:3A:6B",
    type: "MA-L",
    registration_date: "2017-01-07",
  },
  {
    mac_prefix: "CC:6D:A0",
    type: "MA-L",
    registration_date: "2011-07-09",
  },
  {
    mac_prefix: "D0:4D:2C",
    type: "MA-L",
    registration_date: "2015-11-17",
  },
  {
    mac_prefix: "D4:E2:2F",
    type: "MA-L",
    registration_date: "2022-03-29",
  },
  {
    mac_prefix: "D8:31:34",
    type: "MA-L",
    registration_date: "2019-07-02",
  },
  {
    mac_prefix: "DC:3A:5E",
    type: "MA-L",
    registration_date: "2012-10-05",
  },
  {
    mac_prefix: "00:F4:8D",
    type: null,
    registration_date: null,
  },
];

export const isRokuMacAddress = (macAddress: string) => {
  const isRokuDevice = macAddresses.some((mac) => {
    if (mac) {
      return macAddress.toUpperCase().includes(mac.mac_prefix);
    }
    return false;
  });

  return isRokuDevice;
};
