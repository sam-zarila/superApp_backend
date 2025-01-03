import { Body, Controller, Delete, Get, InternalServerErrorException, Param, ParseIntPipe, Post, Put, Query, Res, UseInterceptors } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


import { Response } from 'express';
import { Orders } from 'src/entities/Order.Entity';
import { SellersService } from './sellers.service';
import { CreateSellersApplicationFormDto, selectedDateDTO, UpdateApplicationDto } from './DTO/sellersDTO';
import { SellersApplicationForm } from 'src/entities/sellersApplication.Entity';


@Controller('sellers')
@ApiTags("SELLERS APPLICATION FORM")
export class SellersController {
  constructor(private SellerService: SellersService) { }


  @Post('/create')
  @ApiOperation({ summary: 'create a new appplication ' })
  @ApiResponse({ status: 201, description: 'New application created successfully' })
  async createNewApplication (@Body() ApplicationDTO: CreateSellersApplicationFormDto) {
    try {
        console.log(
        'Incoming application forms :',
        JSON.stringify(ApplicationDTO, null, 2),
      ); // Log entire request body
      const result =
        await this.SellerService.createSellersApplicationForm(ApplicationDTO);
      return {
        message: 'appplication created successfully',
        success: true,
        data: result,
      };
    } catch (error) {
      console.error('Error creating an application:', error);
      throw error;
    }
  }




  @Get('search/:FirstName')
  async getOrderByOrderNumber(@Param('FirstName') FirstName: string): Promise<SellersApplicationForm | string> {
    return await this.SellerService.findSellersApplicationFormByFirstName(FirstName);
  }




  @Get('/allapplications')
  @ApiOperation({ summary: 'Get all application' })
  @ApiResponse({ status: 200, description:'return all applications' })
  async GetAllOrders() {
    return await this.SellerService.GetAllApplications();
  }




  @Get('search-name/:SurName')
  @ApiOperation({ summary: 'Search applications by surname' })
  @ApiResponse({ status: 200, description: 'surname found successfully' })
  async findCUstomerByName(@Param('SurName') SurName: string): Promise<SellersApplicationForm[] | string> {
    if (!SurName) {
      return 'SurName is not provided';
    }
  
    const results = await this.SellerService.findApplicationsBySurName(SurName);
  
    if (results.length === 0) {
      return 'Surname not found';
    }
  
    return results;
  }

    
  @Get('/todayapplications')
  @ApiOperation({summary:'Get all applications for the current day'})
  @ApiResponse({ status: 200, description: 'return all applications by current day ' })
  async getOrdersByDay():Promise<SellersApplicationForm[] | string> {
    return  await this.SellerService.findAllApplicantsByCurrentDay();
  }

  @Get('byselectedDate')
  @ApiOperation({
    summary: 'Get applications  by selected date',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns application by selected date',
  })
  
  async getOrderTransactionsSelectedByDate(@Query() selectedDateDTO: selectedDateDTO) {
    const { ApplicationDate} = selectedDateDTO; // Extract the date from the DTO
    console.log(`Request received for date: ${ApplicationDate}`);  // Logging the incoming request
    try {
      const transactions = await this.SellerService.findapplicationBySelectedDate(ApplicationDate);
      return transactions;
    } catch (error) {
      console.error('Error retrieving applications:', error);
      return {
        message: 'Error retrieving applications for the selected date.',
        error: error.message,
      };
    }
  }

  

  @Put(':id')

  @ApiOperation({ summary: 'Update orders' })
  @ApiResponse({ status: 200, description: 'application updated successfully' })
  async updateOrdersById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedOrderDto: UpdateApplicationDto,
  ): Promise<{ message: string }> {
    await this.SellerService.updatApplicationsById(
      id,
      updatedOrderDto,
    );
    return { message: 'application updated successfully' };
  }


  @Delete(':id')
  @ApiOperation({ summary: 'Delete applications' })
  @ApiResponse({ status: 200, description: 'applications deleted successfully' })
  async deleteOrdersById(
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    try {
      const result = await this.SellerService.deleteApplicationById(id, res);
      return result;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any) {
    console.error('Error occurred:', error);
    throw new InternalServerErrorException('Internal server error');
  }

}