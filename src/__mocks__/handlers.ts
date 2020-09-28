import { rest } from 'msw';
import experiences from './experiences.json';
import { Experience } from '../types/types';
import { DefaultRequestBodyType } from 'msw/lib/types/utils/handlers/requestHandler';

export const handlers = [
  rest.get<DefaultRequestBodyType, Experience[]>(
    '/experience',
    (req, res, ctx) => {
      return res(ctx.json(experiences as Experience[]));
    }
  ),
  rest.get<DefaultRequestBodyType, Experience>(
    '/experience/:id',
    (req, res, ctx) => {
      const { id } = req.params;
      const experience = experiences.find(
        (experience) => experience.id.toString() === id
      );
      return res(ctx.json(experience as Experience));
    }
  ),
];
