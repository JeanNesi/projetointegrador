import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  theme,
  Input,
  Icon,
  Button,
  Collapse,
  Stack,
  FormControl,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header/header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

import { BsFillCalculatorFill } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false, // Carregado pelo blowser e não pelo server
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "";
      },
    },
  },
  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600],
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.7,
    },
  },
};

export default function Dashboard() {
  const [janeiro, setJaneiro] = useState(0);
  const [fevereiro, setFevereiro] = useState(0);
  const [março, setMarço] = useState(0);
  const [abril, setAbril] = useState(0);
  const [maio, setMaio] = useState(0);
  const [junho, setJunho] = useState(0);
  const [julho, setJulho] = useState(0);
  const [agosto, setAgosto] = useState(0);
  const [setembro, setSetembro] = useState(0);
  const [outubro, setOutubro] = useState(0);
  const [novembro, setNovembro] = useState(0);
  const [dezembro, setDezembro] = useState(0);
  const [mediaMensal, setMediaMensal] = useState(0);
  const [desempenho, setDesempenho] = useState(0);
  const [potenciaModulo, setPotenciaModulo] = useState(0);
  const [pfv, setPfv] = useState(0);

  const [openMenu, setOpenMenu] = useState(false);

  const series = [
    {
      name: "Consumo",
      data: [
        janeiro,
        fevereiro,
        março,
        abril,
        maio,
        junho,
        julho,
        agosto,
        setembro,
        outubro,
        novembro,
        dezembro,
      ],
    },
    {
      name: "Geração",
      data: [
        5.66 * 30 * pfv,
        5.23 * 30 * pfv,
        4.5 * 30 * pfv,
        3.79 * 30 * pfv,
        2.98 * 30 * pfv,
        2.49 * 30 * pfv,
        2.7 * 30 * pfv,
        3.43 * 30 * pfv,
        3.54 * 30 * pfv,
        4.32 * 30 * pfv,
        5.65 * 30 * pfv,
        5.91 * 30 * pfv,
      ],
    },
  ];

  return (
    <>
      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Flex direction={"column"} w="100%">
            <Flex w={"100%"} direction={"column"} position="relative">
              <Flex
                background="green.600"
                borderRadius="8px"
                h="50px"
                align={"center"}
                paddingInline="60px"
                mb={4}
                gap="10px"
                onClick={() =>
                  openMenu ? setOpenMenu(false) : setOpenMenu(true)
                }
                justify={"space-between"}
                cursor="pointer"
                transition="200ms"
                _hover={{ opacity: 0.8 }}
              >
                <Flex align={"center"} gap="10px">
                  <Icon as={BsFillCalculatorFill} />
                  <Text>Calcular consumo mensal</Text>
                </Flex>
                <Icon
                  as={BiRightArrowAlt}
                  fontSize={"30"}
                  transition={"200ms"}
                  transform={openMenu ? "rotate(90deg)" : "rotate(0deg)"}
                />
              </Flex>

              <Collapse in={openMenu}>
                <Flex
                  display={openMenu ? "flex" : "none"}
                  w={"100%"}
                  flexWrap="wrap"
                  justify={"center"}
                  gap="15px"
                  maxH="300px"
                  position={"absolute"}
                  top="52px"
                  borderRadius={"8px"}
                  pt={4}
                  pb={5}
                  bg="gray.800"
                  paddingInline={1}
                  zIndex={5}
                >
                  <Box width={"7%"}>
                    <Text>Jan</Text>
                    <Input
                      onChange={(e) => {
                        setJaneiro(parseInt(e.target.value));
                      }}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>
                  <Box width={"7%"}>
                    Fev
                    <Input
                      onChange={(e) => setFevereiro(parseInt(e.target.value))}
                      type="text"
                      placeholder="KW"
                    />
                  </Box>
                  <Box width={"7%"}>
                    Mar
                    <Input
                      onChange={(e) => setMarço(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>
                  <Box width={"7%"}>
                    Abr
                    <Input
                      onChange={(e) => setAbril(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>
                  <Box width={"7%"}>
                    Maio
                    <Input
                      onChange={(e) => setMaio(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>

                  <Box width={"7%"}>
                    Jun
                    <Input
                      onChange={(e) => setJunho(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>

                  <Box width={"7%"}>
                    Jul
                    <Input
                      onChange={(e) => setJulho(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>

                  <Box width={"7%"}>
                    Ago
                    <Input
                      onChange={(e) => setAgosto(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>

                  <Box width={"7%"}>
                    Set
                    <Input
                      onChange={(e) => setSetembro(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>

                  <Box width={"7%"}>
                    Out
                    <Input
                      onChange={(e) => setOutubro(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>

                  <Box width={"7%"}>
                    Nov
                    <Input
                      onChange={(e) => setNovembro(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>

                  <Box width={"7%"}>
                    Dez
                    <Input
                      onChange={(e) => setDezembro(parseInt(e.target.value))}
                      type="number"
                      placeholder="KW"
                    />
                  </Box>
                  <Button
                    w={"98%"}
                    colorScheme="green"
                    onClick={() => {
                      setMediaMensal(
                        (janeiro +
                          fevereiro +
                          março +
                          abril +
                          maio +
                          junho +
                          julho +
                          agosto +
                          setembro +
                          outubro +
                          novembro +
                          dezembro) /
                          12
                      );
                      setOpenMenu(false);
                    }}
                  >
                    Calcular
                  </Button>
                </Flex>
              </Collapse>
            </Flex>

            <Flex gap={"20px"}>
              <Stack w="100%" as={"form"}>
                <Box w={"100%"}>
                  <Text>Consumo médio mensal</Text>
                  <Input disabled value={`${mediaMensal.toFixed(2)} KW`} />
                </Box>

                <Box w={"100%"}>
                  <Text>Irradiação solar diária média</Text>
                  <Input disabled value={`4,18 kWh/m2.dia`} />
                </Box>

                <Box w={"100%"}>
                  <Text>Taxa de desempenho do sistema</Text>
                  <Input
                    type="text"
                    name="desempenho"
                    placeholder="Inserir valor"
                    onChange={(e) => setDesempenho(parseInt(e.target.value))}
                  />
                </Box>

                <Box w={"100%"}>
                  <Text>Potência do módulo</Text>
                  <Input
                    type="number"
                    placeholder="Inserir valor"
                    id="potenciaModulo"
                  />
                </Box>

                <Box w={"100%"}>
                  <Text>Valor do módulo</Text>
                  <Input
                    type="number"
                    placeholder="Inserir valor"
                    id="valorModulo"
                  />
                </Box>

                <Box w={"100%"}>
                  <Text>Valor do Inversor</Text>
                  <Input
                    type="number"
                    placeholder="Inserir valor"
                    id="valorInversor"
                  />
                </Box>

                <Button
                  colorScheme={"green"}
                  onClick={() => setPfv(mediaMensal / (4.38 * 30 * desempenho))}
                  type="submit"
                  id="send"
                >
                  Calcular
                </Button>
              </Stack>

              <Flex
                w="100%"
                border={"4px solid #2F855A"}
                borderRadius={"8px"}
                direction="column"
              >
                <Text>PFV: {pfv.toFixed(2)}</Text>
              </Flex>
            </Flex>
            <SimpleGrid flex="1" gap="4" minChildWidth="320px" marginTop={6}>
              <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
                <Text fontSize="lg" mb="4">
                  Gasto mensal x Geração mensal
                </Text>
                <Chart
                  type="bar"
                  height={300}
                  options={options}
                  series={series}
                />
              </Box>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
