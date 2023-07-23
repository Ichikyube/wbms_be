import { Controller } from '@nestjs/common';

@Controller('roles')
export class RolesController {
    constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param() { id }: FindOneParams) {
    return this.productsService.getProductById(id);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }

  @Patch(':id')
  async updateProduct(
    @Param() { id }: FindOneParams,
    @Body() product: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, product);
  }

  @Delete(':id')
  async deleteProduct(@Param() { id }: FindOneParams) {
    return this.productsService.deleteProduct(id);
  }
}
