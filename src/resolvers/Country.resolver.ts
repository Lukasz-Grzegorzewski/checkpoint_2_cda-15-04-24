import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Country, CountryCreateInput } from '../entities/Country';

@Resolver(CountryResolver)
export class CountryResolver {
  @Query(() => [Country])
  async findAllCountries(): Promise<Country[]> {
    const contries = await Country.find();
    return contries;
  }

  @Query(() => Country)
  async findCountry(@Arg('code') code: string): Promise<Country | null> {
    const country = await Country.findOne({ where: { code } });
    return country;
  }

  @Query(() => [Country])
  async findCountriesByContinent(
    @Arg('codeContinent') codeContinent: string
  ): Promise<Country[]> {
    const countries = await Country.find({ where: { codeContinent } });
    return countries;
  }

  @Mutation(() => Country)
  async createCountry(@Arg('data') data: CountryCreateInput): Promise<Country> {
    const newCountry = new Country();
    Object.assign(newCountry, data);
    await newCountry.save();

    return newCountry;
  }
}
