class FreelancersController < ApplicationController
    before_action :find_freelancer, only: %i[show]
    
    def index
        freelancers = Freelancer.all
        render json: freelancers
    end

    def show
        render json: @freelancer
    end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_freelancer
     @freelancer = Freelancer.find(params[:id])
    end
end
