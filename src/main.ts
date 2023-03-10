import { NestFactory } from "@nestjs/core";
import helmet from "helmet";
import { AppModule } from "./app.module";
//import * as csurf from 'csurf';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  //app.use(csurf());

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
