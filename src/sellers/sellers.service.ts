import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SellersApplicationForm } from 'src/entities/sellersApplication.Entity';
import { Between, Repository } from 'typeorm';
import { CreateSellersApplicationFormDto, UpdateApplicationDto } from './DTO/sellersDTO';
import { SellersApplicationparams } from 'src/orders/Utils/types';
import { Response } from 'express'
@Injectable()
export class SellersService {
  constructor(
    @InjectRepository(SellersApplicationForm) private SellersApplicationRepository: Repository<SellersApplicationForm>,
  ) {}

  
  async createSellersApplicationForm(createSellerApplicationDto: CreateSellersApplicationFormDto): Promise<SellersApplicationForm> {
  const newApplication= this.SellersApplicationRepository.create(createSellerApplicationDto);
  if (!createSellerApplicationDto.ApplicationDate) {
    createSellerApplicationDto.ApplicationDate = new Date();
  }
    return await this.SellersApplicationRepository.save(newApplication);
  }



  async findSellersApplicationFormByFirstName (FirstName: string): Promise<SellersApplicationForm | string> {
    try {
      const sellersapplication = await this.SellersApplicationRepository.findOne({
        where: { FirstName: FirstName},
      });

      if (!sellersapplication) {
        
        return `application form for this name  ${FirstName} not found`;
      }

      return sellersapplication;
    } catch (error) {
      console.error(
        `Error while searching for an application form by FirstName: ${error.message}`,
      );
      throw new Error(`Error while searching for application form: ${error.message}`);
    }
  }

  // Method to find transactions by selected date
  async findapplicationBySelectedDate(selectedDate: string) {
    try {
        // Use a query builder to find order transactions on the selected date
        const applications = await this.SellersApplicationRepository.createQueryBuilder('applications')
            .where('DATE(application. ApplicationDate) = :selectedDate', { selectedDate })
            .getMany();

        return applications;
    } catch (error) {
        console.error("An error occurred when selecting the chosen date", error);
        throw new Error("Could not retrieve applications transactions for the selected date.");
    }
}



  // Other methods in the service...

  async GetAllApplications(): Promise<SellersApplicationForm[]> {
    return await this.SellersApplicationRepository.find();
  }




  async findApplicationsBySurName(Surname: string): Promise<SellersApplicationForm[] | string> {
    try {
      const query = this.SellersApplicationRepository.createQueryBuilder('applications')
        .where('applications.surname = :SurName', { Surname })
        .getMany();
      if ((await query).length === 0) {
        return 'applicant with this surname not found';
      }
      return query;
    } catch (error) {
      console.error('Error finding applicant by surnname:', error);
      throw new InternalServerErrorException('Failed to retrieve applicant by name.');
    }
  }

  

  async findAllApplicantsByCurrentDay(): Promise<SellersApplicationForm[] | string> {
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1,
    );

    try {
      const applications = await this.SellersApplicationRepository.find({
        where: {
          ApplicationDate: Between(startOfDay, endOfDay),
        },
      });

      if (applications.length === 0) {
        return 'Oops! No applications available for today.';
      }
      return applications;
    } catch (error) {
      console.error(`Error while fetching for applications: ${error.message}`);
      throw new Error(`Error while fetching applications: ${error.message}`);
    }
  }




  async updatApplicationsById(
    id: number,
    updatedApplicationDetails: UpdateApplicationDto,
  ): Promise<void> {
    try {
      const updateObject: Partial<SellersApplicationparams> = {};


      if (updatedApplicationDetails.FirstName!== undefined) {
        updateObject.FirstName = updateObject.FirstName;
      }

     

      if (updatedApplicationDetails.Surname !== undefined) {
        updateObject.SurName = updatedApplicationDetails.Surname;
      }

   
      if (updatedApplicationDetails.NationalID !== undefined) {
        updateObject.NationalID= updatedApplicationDetails.NationalID;
      }

      if (updatedApplicationDetails.BusinessName !== undefined) {
        updateObject.BusinessName = updatedApplicationDetails.BusinessName;
      }

      if (updatedApplicationDetails.PhoneNumber !== undefined) {
        updateObject.PhoneNumber= updatedApplicationDetails.PhoneNumber;
      }

      if (updatedApplicationDetails.Address !== undefined) {
        updateObject.Address = updatedApplicationDetails.Address;
      }
      if (updatedApplicationDetails.BusinessDescription !== undefined) {
        updateObject.BusinessDescription= updatedApplicationDetails.BusinessDescription;
      }

      if (Object.keys(updateObject).length > 0) {
        await this.SellersApplicationRepository.update(id, updateObject);
      }
    } catch (error) {
      console.error(
        `Error while updating an application by ID: ${error.message}`,
      );
      throw new Error(`Error while updating application by ID: ${error.message}`);
    }
  }


  async deleteApplicationById(id: number, res: Response): Promise<{ isValid: boolean }> {
    try {
      const result = await this.SellersApplicationRepository.delete(id);
  
      if (result.affected && result.affected > 0) {
        console.log("application deleted")
        res.status(200).json({ isValid: true, message: 'Order deleted' });
        return { isValid: true };
      } else {
        res.status(404).json({ isValid: false, message: 'Order not found' });
        return { isValid: false };
      }
    } catch (error) {
      res.status(500).json({ isValid: false, message: 'An error occurred' });
      console.error(`Error while deleting an order: ${error.message}`);
      return { isValid: false };
    }
  }
}