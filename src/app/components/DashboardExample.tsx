'use client';

import { InformationCircleIcon } from '@heroicons/react/solid';

import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  BadgeDelta,
  DeltaType,
  Flex,
  Metric,
  ProgressBar,
  AreaChart,
  Color,
  Icon,
  MultiSelect,
  MultiSelectItem,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Subtitle,
  BarChart,
  LineChart,
} from '@tremor/react';

type Kpi = {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: DeltaType;
};

const kpiData: Kpi[] = [
  {
    title: 'Sales',
    metric: '$ 12,699',
    progress: 15.9,
    target: '$ 80,000',
    delta: '13.2%',
    deltaType: 'moderateIncrease',
  },
  {
    title: 'Profit',
    metric: '$ 45,564',
    progress: 36.5,
    target: '$ 125,000',
    delta: '23.9%',
    deltaType: 'increase',
  },
  {
    title: 'Customers',
    metric: '1,072',
    progress: 53.6,
    target: '2,000',
    delta: '10.1%',
    deltaType: 'moderateDecrease',
  },
];

import { useState } from 'react';

const usNumberformatter = (number: number, decimals = 0) =>
  Intl.NumberFormat('us', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Number(number))
    .toString();

const formatters: { [key: string]: any } = {
  Sales: (number: number) => `$ ${usNumberformatter(number)}`,
  Profit: (number: number) => `$ ${usNumberformatter(number)}`,
  Customers: (number: number) => `${usNumberformatter(number)}`,
  Delta: (number: number) => `${usNumberformatter(number, 2)}%`,
};

const Kpis = {
  Sales: 'Sales',
  Profit: 'Profit',
  Customers: 'Customers',
};

const kpiList = [Kpis.Sales, Kpis.Profit, Kpis.Customers];

export type DailyPerformance = {
  date: string;
  Sales: number;
  Profit: number;
  Customers: number;
};

export const performance: DailyPerformance[] = [
  {
    date: '2023-05-01',
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: '2023-05-02',
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: '2023-05-03',
    Sales: 1100.93,
    Profit: 293.1,
    Customers: 293,
  },
  {
    date: '2023-05-04',
    Sales: 1200.9,
    Profit: 290.2,
    Customers: 29,
  },
];

export type SalesPerson = {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  status: string;
};

export const salesPeople: SalesPerson[] = [
  {
    name: 'Peter Doe',
    leads: 45,
    sales: '1,000,000',
    quota: '1,200,000',
    variance: 'low',
    region: 'Region A',
    status: 'overperforming',
  },
  {
    name: 'Lena Whitehouse',
    leads: 35,
    sales: '900,000',
    quota: '1,000,000',
    variance: 'low',
    region: 'Region B',
    status: 'average',
  },
  {
    name: 'Phil Less',
    leads: 52,
    sales: '930,000',
    quota: '1,000,000',
    variance: 'medium',
    region: 'Region C',
    status: 'underperforming',
  },
  {
    name: 'John Camper',
    leads: 22,
    sales: '390,000',
    quota: '250,000',
    variance: 'low',
    region: 'Region A',
    status: 'overperforming',
  },
  {
    name: 'Max Balmoore',
    leads: 49,
    sales: '860,000',
    quota: '750,000',
    variance: 'low',
    region: 'Region B',
    status: 'overperforming',
  },
];

const deltaTypes: { [key: string]: DeltaType } = {
  average: 'unchanged',
  overperforming: 'moderateIncrease',
  underperforming: 'moderateDecrease',
};

const chartdata = [
  {
    name: '<20%',
    'Number of investors': 3,
  },
  {
    name: '20.0%',
    'Number of investors': 8,
  },
  {
    name: '21.0%',
    'Number of investors': 9,
  },
  {
    name: '22.0%',
    'Number of investors': 3,
  },
  {
    name: '23.0%',
    'Number of investors': 6,
  },
  {
    name: '24.0%',
    'Number of investors': 3,
  },
  {
    name: '>24%',
    'Number of investors': 2,
  },
];

const dataFormatter = (number: number) => {
  return '' + Intl.NumberFormat('us').format(number).toString();
};

const chartdataLine = [
  {
    year: '07/01',
    'KPI 1': 4,
    'KPI 2': 2.5,
    'KPI 3': 2.1,
  },
  {
    year: '07/15',
    'KPI 1': 2.46,
    'KPI 2': 4.5,
    'KPI 3': 1.6,
  },
  {
    year: '07/30',
    'KPI 1': 3.8,
    'KPI 2': 2,
    'KPI 3': 3.2,
  },
  {
    year: '08/15',
    'KPI 1': 4.6,
    'KPI 2': 2.6,
    'KPI 3': 4.8,
  },
  //...
];

const chartdataLine2 = [
  {
    year: '3Q22',
    'KPI 1': -2.04,
    'KPI 2': 3.0,
    'KPI 3': 0.5,
  },
  {
    year: '4Q22',
    'KPI 1': -1.56,
    'KPI 2': 4.0,
    'KPI 3': 1.1,
  },
  {
    year: '1Q23',
    'KPI 1': -3.56,
    'KPI 2': 2.6,
    'KPI 3': -1,
  },
  {
    year: '2Q23',
    'KPI 1': 1.23,
    'KPI 2': 4.8,
    'KPI 3': 1.93,
  },
  //...
];

const dataFormatterLine = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}%`;
const dataFormatterLine1 = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export default function DashboardExample() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedKpi = kpiList[selectedIndex];
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === 'all') &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  const areaChartArgs = {
    className: 'mt-5 h-72',
    data: performance,
    index: 'date',
    categories: [selectedKpi],
    colors: ['blue'] as Color[],
    showLegend: false,
    valueFormatter: formatters[selectedKpi],
    yAxisWidth: 56,
  };
  return (
    <main className="px-12 py-12">
      <Title>Dashboard</Title>
      <Text>View core metrics on the state of your company.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsLg={3} className="mt-6 gap-6">
              {/* Line Chart 1 */}

              <Card>
                <Title>Median Bogey Over Time</Title>
                <LineChart
                  className="mt-6"
                  data={chartdataLine}
                  index="year"
                  categories={['KPI 1', 'KPI 2', 'KPI 3']}
                  colors={['emerald', 'gray', 'blue']}
                  valueFormatter={dataFormatterLine1}
                  yAxisWidth={40}
                />
              </Card>

              {/* Bar Chart 1 */}

              <Card>
                <Title>Bogey Distribution Detail</Title>
                {/* <Subtitle>
                  The IUCN Red List has assessed only a small share of the total
                  known species in the world.
                </Subtitle> */}
                <BarChart
                  className="mt-6"
                  data={chartdata}
                  index="name"
                  categories={['Number of investors']}
                  colors={['blue']}
                  valueFormatter={dataFormatter}
                  yAxisWidth={48}
                />
              </Card>

              {/* Line Chart 2 */}

              <Card>
                <Title>Historical Performance vs Bogeys</Title>
                <Subtitle>Difference vs Actuals</Subtitle>
                <LineChart
                  className="mt-6"
                  data={chartdataLine2}
                  index="year"
                  categories={['KPI 1', 'KPI 2', 'KPI 3']}
                  colors={['emerald', 'gray', 'blue']}
                  valueFormatter={dataFormatterLine}
                  yAxisWidth={40}
                />
              </Card>
            </Grid>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
