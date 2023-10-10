export class StartProjectDto {
  started_at: Date;
}


//1 caso de uso para cada campo

//nome, descrição

//preço e desconto

class UpdateProductInfoUseCase{

  execute(id: string, input: {name, description, price }){
    const product = this.productRepo.findById(id);

    input.name && (product.changeName(input.name));
    input.description && (product.changeDescription(input.description));
    //input.price && (product.changePrice(input.price));

    this.productRepo.update(product);
  }
}

class ChangePriceUseCase{
  execute(id: string, input: {price}){
    const product = this.productRepo.findById(id);

    product.changePrice(input.price);

    this.productRepo.update(product);
  }
}

//formulário de produto

//nome, descrição, preço, desconto
//2 chamadas pra API (uma para atualizar info basicas e outra para atualizar o preço)

PUT /products/:id 


PATCH /products/:id
POST /products/:id/change-price