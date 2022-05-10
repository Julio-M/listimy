class FreelancersController < ApplicationController
    before_action :find_freelancer, only: %i[update show]
    skip_before_action :authorize, only: %i[index create update show]
    skip_before_action :authorize_freelancer, only: %i[index create update show]
    
    def index
        freelancers = Freelancer.all
        render json: freelancers
    end

    def show
    # this function was placed under user controller
        render json: @freelancer
    end

    def create
        freelancer = Freelancer.create!(free_params)
        session[:freelancer_id] = freelancer.id
        render json: freelancer, status: :created
    end

    # def update
    #     this function was placed under user controller
    #     @freelancer.update(free_params)
    #     render json: @freelancer, status: :accepted
    # end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_freelancer
     @freelancer = Freelancer.find_by(id:session[:view_freelancer_id])
    end

    def free_params
        params.permit(:username, :password, :password_confirmation, :email,:profile_picture,:cover_photo,:services_photos,:location)
    end

end
