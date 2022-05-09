class FreelancersController < ApplicationController
    before_action :find_freelancer, only: %i[show]
    skip_before_action :authorize, only: %i[create]
    
    def index
        freelancers = Freelancer.all
        render json: freelancers
    end

    def show
        render json: @freelancer
    end

    def create
        freelancer = Freelancer.create!(free_params)
        session[:freelancer_id] = freelancer.id
        render json: freelancer, status: :created
      end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_freelancer
     @freelancer = Freelancer.find_by(id:session[:user_id])
    end

    def free_params
        params.permit(:username, :password, :password_confirmation, :email,:profile_picture,:cover_photo,:services_photos,:location)
    end

end
