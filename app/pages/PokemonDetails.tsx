import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchPokemon } from "../services/pokemon.service";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Link, useParams } from "react-router-dom";
import * as ROUTES from "../constants/routes";
const PokemonDetails = () => {
  const { id } = useParams();
  const [chartData, setChartData] = useState<{
    options: ApexOptions;
    series: Object;
  }>({
    options: {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
          },
        },
      },
      labels: [],
    },
    series: [],
  });

  const {
    error: errorPokemon,
    isLoading: isLoadingPokemon,
    data: pokemon,
  } = useQuery([id], fetchPokemon, {
    enabled: id !== undefined ? true : false,
  });

  useEffect(() => {
    if (errorPokemon) {
      console.log(errorPokemon);
    }
  }, [errorPokemon]);

  useEffect(() => {
    if (pokemon) {
      console.log(pokemon.stats);
      const stats = pokemon.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
        nameValue: `${stat.stat.name}: ${stat.base_stat}`,
      }));

      setChartData({
        options: {
          ...chartData.options,
          labels: stats.map((stat) => stat.name),
        },
        series: stats.map((stat) => stat.value),
      });
    }
  }, [pokemon]);

  if (isLoadingPokemon) return "Loading...";

  return (
    <div>
      <button>
        <Link to={ROUTES.HOME}>Back</Link>
      </button>
      <h1>{pokemon?.name}</h1>
      <Chart
        options={chartData.options}
        series={chartData.series as any}
        type="radialBar"
        width="380"
      />
    </div>
  );
};

export default PokemonDetails;
