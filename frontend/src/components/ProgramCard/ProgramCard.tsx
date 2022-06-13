import React, { useEffect, useState } from 'react';
import { Performance } from '../../types/performance';
import { ActionIcon, Container, Group, SegmentedControl, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import useSWR from 'swr';
import LoadingCard from '../Loading/LoadingCard';
import LoadError from '../Error/LoadError';
import Performances from './Performances';
import { ArrowRight, Search } from 'tabler-icons-react';

export function ProgramCard() {
  const [filter, setFilter] = useState("all");
  const [searchString, setSearchString] = useState("");

  const form = useForm({
    initialValues: { sString: "" },
    validate: {},
  });

  useEffect(() => {
    document.title = "Farfalle | Program"
  }, [])

  const { data, error } = useSWR(`performance?future=true`);

  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;

  const performances: Performance[] = data;

  const searchPerformances = (searchString: string, performances: Performance[]) => {
    if (searchString == "") {
      return performances;
    }
    return performances.filter((item) => item.play.name.toLowerCase().includes(searchString));
  }

  const getPerformances = (searchString: string, filter: string, performances: Performance[]) => {
    const searchedPerformances = searchPerformances(searchString, performances);
    switch (filter) {
      case "today":
        return [searchedPerformances[0]];
      default:
        return searchedPerformances;
    }
  }

  const handleSubmit = (values: { sString: string }) => {
    setSearchString(values.sString.toLowerCase());
  }

  return (
    <Container>
      <Stack>
        <Group position='apart'>
          <SegmentedControl
            data={[
              { value: 'all', label: 'All' },
              { value: 'today', label: 'Today' },
              { value: 'week', label: 'This week' },
              { value: 'month', label: 'This month' },
            ]}
            onChange={(value) => setFilter(value)}
          />
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <TextInput
              icon={<Search size={18} />}
              color='red'
              radius="xl"
              rightSection={
                <ActionIcon size={32} radius="xl" variant="filled" type="submit">
                  <ArrowRight size={18} />
                </ActionIcon>
              }
              {...form.getInputProps('sString')}
              placeholder="Search performances"
              rightSectionWidth={42}
            />
          </form>
        </Group>

        <Performances performances={getPerformances(searchString, filter, performances)} />
      </Stack>
    </Container>
  );
}

export default ProgramCard;
